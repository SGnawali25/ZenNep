const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    caption:{
        type: 'string',
    },
    image: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    name:{
        type: 'string',
        required: true,
    },
    likes: [{
        
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
    }],
    comments:[{
        text:{
            type: String,
            required: true,
        },
        user:{
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        name:{
            type: String,
            required: true,
        }

    }],
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Story', storySchema);