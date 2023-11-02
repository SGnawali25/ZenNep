const express = require('express');
const router = express.Router();
const { isAuthenticatedUser, authorizedRoles } = require('../middlewares/auth');

const {
    createStory, 
    getStories,
    getStoryById,
    deleteStoryById,
    updateStoryById,
    likeaStoryById,
    commentaStoryById,
    updateComment,
    deleteComment
} = require('../controllers/storyController')

router.route('/create/story').post(isAuthenticatedUser, createStory);

router.route('/stories').get(isAuthenticatedUser, getStories);

router.route('/story/:id')
                            .get(isAuthenticatedUser, getStoryById)
                            .delete(isAuthenticatedUser, deleteStoryById)
                            .put(isAuthenticatedUser, updateStoryById);

router.route('/story/:id/like').get(isAuthenticatedUser, likeaStoryById)

router.route('/story/:id/comment').post(isAuthenticatedUser, commentaStoryById)
                                  
router.route('/story/:id/comment/:commentId').put(isAuthenticatedUser, updateComment)
                                             .delete(isAuthenticatedUser, deleteComment)


                        

module.exports = router;