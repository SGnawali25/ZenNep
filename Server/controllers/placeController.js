const Place = require('../models/place');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');
const cloudinary = require('cloudinary');




//create a new place
exports.createPlace = catchAsyncErrors(async(req, res, next) => {
    let images = []
    images = req.body.images;
    let imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: 'ZenNep/places'
        });

        imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url
        })
    }

    req.body.images = imagesLinks
    req.body.user = req.user.id;

    const place = await Place.create(req.body);

    res.status(201).json({
        success: true,
        place
    })
})


//get all the places in the database for user
exports.getPlaces = catchAsyncErrors(async(req, res, next) => {
    // const placesCount = await Place.countDocuments();
    let places = await Place.find().sort({ createdAt: -1 });

    const locationSearch = places.filter(p => p.location.toLowerCase().includes(req.query.keyword.toLowerCase()))
    const nameSearch = places.filter(p => p.name.toLowerCase().includes(req.query.keyword.toLowerCase()))
    const descriptionSearch = places.filter(p => p.description.toLowerCase().includes(req.query.keyword.toLowerCase()))

    places = Array.from(new Set([...locationSearch, ...nameSearch, ...descriptionSearch]));


    res.status(200).json({
        success: true,
        places,
        
    })
})

//get all the places in the database for admin
exports.getAdminPlaces = catchAsyncErrors(async (req, res, next) => {

    const place = await Place.find();
    const placeCount = await Place.countDocuments();

    res.status(200).json({
        success: true,
        placeCount,
        place
    })

})

//get a particular place by its id
exports.getPlaceById = catchAsyncErrors( async(req, res, next) => {
    const place = await Place.findById(req.params.id);

    if (!place) {
        return next( new ErrorHandler("Place not found"), 404);
    }

    res.status(200).json({
        success: true,
        place
    })
})


//edit places by Id
exports.updatePlaceById = catchAsyncErrors( async(req, res, next) => {
    let place = await Place.findById(req.params.id);
    if (!place) {
        return next(new ErrorHandler('Place not found', 404));
    }
    

    place = await Place.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        message: "Place updated successfully",
        place,
    })

})

//delete place by Id
exports.deletePlaceById = catchAsyncErrors( async(req,res, next) => {
    const place = await Place.findByIdAndDelete(req.params.id);
    // const place = await Place.findById(req.params.id);
    if(!place){
        return next(new ErrorHandler("There is not such a place to delete", 404));
    }

    const imageArr = []
    for (let i = 0; i < place.images.length; i++) {
        imageArr.push(place.images[i].public_id);
        await cloudinary.v2.api
                    .delete_resources([`${place.images[i].public_id}`], 
                    { type: 'upload', resource_type: 'image' })
    }

    res.status(200).json({
        success: true,
        message: "Place Deleted successfully",
        place,
    })
})

//create review of a place
exports.createPlaceReview = catchAsyncErrors(async(req, res, next) => {
    const {rating, comment} = req.body;
    const placeId = req.params.id;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        reviewerImage: req.user.image.url,
        comment
    }

    const place = await Place.findById(placeId);

    if(!place){
        return next(new ErrorHandler("There is not such a place", 404));
    }

    const isReviewed = place.reviews.find(r => r.user.toString() === req.user._id.toString());

    if (isReviewed){
        place.reviews.forEach(review=> {
            if (review.user._id.toString() === req.user.id.toString()){
                review.comment = comment,
                review.rating = rating
            }
        })
    } else {
        place.reviews.push(review);
        place.numOfReviews = place.reviews.length;
    }


    place.ratings = place.reviews.reduce((acc, item) => item.rating + acc, 0)/place.reviews.length
    await place.save({validateBeforeSave: false});

    res.status(200).json({
        success: true,
        message: "Place review generated",
        place
    })
})

exports.getPlaceReviews = catchAsyncErrors( async(req, res, next)=> {
    const place = await Place.findById(req.params.placeId);

    if (!place){
        return next(new ErrorHandler("Place not found", 404));
    }

    const reviews = place.reviews;
    res.status(200).json({
        status: true,
        reviews
    })

})

exports.updatePlaceReview = catchAsyncErrors( async(req, res, next) => {
    let place = await Place.findById(req.params.placeId);
    let reviews = place.reviews.filter(r=> r.user.toString() !== req.user.id.toString() || r._id.toString() !== req.params.reviewId);

    if (reviews.length === place.reviews.length){
        return next(new ErrorHandler("You are not allowed to update this review", 404))
    }

    let review= place.reviews.filter(r=> r.user.toString() === req.user.id.toString())[0];
    review.comment = req.body.comment || review.comment;
    review.rating = req.body.rating || review.rating;

    const ratings = reviews.reduce((acc, item) => item.rating + acc, 0)/reviews.length || 0;


    place = await Place.findByIdAndUpdate(req.params.placeId, {reviews, ratings},
        {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })

    res.status(200).json({
        success: true,
        message: "Review updated successfully",
        place
    })
    
    

})

exports.deletePlaceReview = catchAsyncErrors( async(req, res, next) => {
    const place = await Place.findById(req.params.placeId);

     
    const reviews = place.reviews.filter(r=> r.user.toString() !== req.user.id.toString() || r._id.toString() !== req.params.reviewId);
    if (reviews.length === place.numOfReviews){
        return next(new ErrorHandler("You cannot delete this review"));
    }

    const numOfReviews = reviews.length;
    const ratings = reviews.reduce((acc, item) => item.rating + acc, 0)/numOfReviews || 0;

    await Place.findByIdAndUpdate(req.params.placeId,
        {reviews,
        ratings,
        numOfReviews},
        {
        new: true,
        runValidators: true,
        useFindAndModify: false
        }
    )

    res.status(200).json({
        success: true,
        reviews
    })


    
})

