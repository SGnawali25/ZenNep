const Place = require('../models/place');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures')




//create a new place
exports.createPlace = catchAsyncErrors(async(req, res, next) => {
    const {name, location, description} = req.body;
    const user = req.user.id;

    let picture = req.body.picture;
    if (!picture){
        return next(new ErrorHandler("Please upload atleat one picture",401));
    }

    const result = await cloudinary.v2.uploader.upload(req.body.picture,{
        folder: "ZenNep/places",
        width: 500,
        crop: "scale",
        quality: 100
    })


    picture = [{public_id: result.public_id, url: result.secure_url}]


    const place = await Place.create({
        name,
        location,
        description,
        user,
        picture
    })
    
    res.status(200).json({
        success: true,
        message: 'Place created successfully',
        place
    })
})


//get all the places in the database for user
exports.getPlaces = catchAsyncErrors(async(req, res, next) => {
    const placesCount = await Place.countDocuments();
    const apiFeatures = new APIFeatures(Place.find(), req.query)
        .search()

    const places = await apiFeatures.query;

    res.status(200).json({
        success: true,
        placesCount,
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

    if(!place){
        return next(new ErrorHandler("There is not such a place to delete", 404));
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

