const Story = require('../models/story');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const cloudinary = require('cloudinary')


exports.createStory = catchAsyncErrors(async(req, res, next) => {
    const {caption} = req.body;
    const user = req.user.id;
    const creator_name = req.user.name;
    const userImage = req.user.image.url;


    if (!req.body.picture){
        return next (new ErrorHandler("Please select a picture", 401));
    }

    const result = await cloudinary.v2.uploader.upload(req.body.picture,{
        folder: "ZenNep/stories",
    })


    const story = await Story.create({
        caption,
        user,
        creator_name,
        userImage,
        image: {
            public_id: result.public_id,
            url: result.secure_url
        }
    })

    res.status(200).json({
        status: true,
        story
    })
})

exports.getStories = catchAsyncErrors(async(req, res, next) => {
    const stories = await Story.find().sort({ createdAt: -1 });

    res.status(200).json({
        status: true,
        stories
    })
})

exports.getStoryById = catchAsyncErrors(async(req, res, next) => {
    const story = await Story.findById(req.params.id);

    if(!story){
        return next(new ErrorHandler("There is not such a story you selected.", 404))
    }

    res.status(200).json({
        status: true,
        story
    })
})

exports.updateStoryById = catchAsyncErrors(async(req, res, next) => {
    let story = await Story.findById(req.params.id);

    if (!story){
        return next(new ErrorHandler("There is not such a story you selected.", 404))
    }

    if (story.user.toString() !== req.user.id.toString()){
        return next(new ErrorHandler("You are not allowed to delete this story", 401));
    }

    story = await Story.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        status:true,
        story
    })

})

exports.deleteStoryById = catchAsyncErrors(async(req,res, next) => {
    const story = await Story.findById(req.params.id);
    if (!story){
        return next(new ErrorHandler("There is not such a story you selected.", 404))
    }

    if (story.user.toString() !== req.user.id.toString() && req.user.role.toString() !== 'admin'){
        return next(new ErrorHandler("You are not allowed to delete this story", 401));
    }

    await cloudinary.v2.api
                    .delete_resources([`${story.image.public_id}`], 
                    { type: 'upload', resource_type: 'image' })

    await Story.findByIdAndDelete(req.params.id);

    res.status(200).json({
        status: true,
        story
    })
})

exports.likeaStoryById = catchAsyncErrors(async(req, res, next) => {
    let story = await Story.findById(req.params.id)

    if (!story){
        return next(new ErrorHandler("There is not such a story you selected.", 404))
    }

    let likes = story.likes.filter(like=> like.toString() === req.user.id.toString())

    if (likes.length !== 0){
        likes = story.likes.filter(like=> like.toString() !== req.user.id.toString())
        story = await Story.findByIdAndUpdate(req.params.id, {likes}, 
            {
            new: true,
            runValidators: true,
            useFindAndModify: false
            }
            )
    } else{
        story.likes.push(req.user.id);
        story = await Story.findByIdAndUpdate(req.params.id, {likes: story.likes, user: req.user.id, name: req.user.name}, 
        {
        new: true,
        runValidators: true,
        useFindAndModify: false
        }
        )
    }

    res.status(200).json({
        success: true,
        story
    })
})

exports.commentaStoryById = catchAsyncErrors(async(req, res, next) => {
    let story = await Story.findById(req.params.id)
    if(!story){
        return next(new ErrorHandler("No comment found", 404))
    }


    const text = req.body.comment;
    if (!text) {
        return next(new ErrorHandler("Comment text is required", 400));
    }

    const { id: user, image, name } = req.user;
    const comment = { text, user, name, userImage: image.url };

    story.comments.push(comment)
    await story.save();

    res.status(200).json({
        status: true,
        story
    })
})

exports.updateComment = catchAsyncErrors(async(req, res, next) => {
    const story = await Story.findById(req.params.id)
    if (!story){
        return next(new ErrorHandler("There is no such a comment", 404))
    }

    let comments = story.comments.filter(c => c.user.toString() !== req.user.id.toString() || req.params.commentId.toString() !== c._id.toString())

    if (comments.length === story.comments.length){
        return next(new ErrorHandler("You are not allowed to edit this comment", 401))
    }

    let comment = story.comments.filter(c => c.user.toString() === req.user.id.toString() && req.params.commentId.toString() === c._id.toString())[0]
    comment.text = req.body.text;
    comments.push(comment)
    story.comments = comments;
    story.save();

    res.status(200).json({
        status: true,
        story
    })

})

exports.deleteComment = catchAsyncErrors(async (req, res, next) => {
    const story = await Story.findById(req.params.id)
    if(!story){
        return next(new ErrorHandler("there is no such a story", 404))
    }
    let comments = story.comments.filter(c => c.user.toString() !== req.user._id.toString() || req.params.commentId.toString() !== c._id.toString())

    
    if (comments.length === story.comments.length){
        return next(new ErrorHandler("You are not allowed to delete this comment", 401))
    }

    story.comments = comments;
    await story.save()
    
    res.status(200).json({
        status: true,
        story
    })
})