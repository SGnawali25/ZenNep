const express = require('express');
const router = express.Router();
const { isAuthenticatedUser, authorizedRoles } = require('../middlewares/auth');


const {
    createPlace, 
    getPlaces, 
    getPlaceById,
    updatePlaceById,
    deletePlaceById,
    getAdminPlaces,
    createPlaceReview,
    getPlaceReviews,
    deletePlaceReview,
    updatePlaceReview
} = require("../controllers/placeController");

router.route('/register/place').post(isAuthenticatedUser, authorizedRoles('admin'), createPlace);

router.route('/places').get(getPlaces);

router.route('/admin/places').get(getAdminPlaces);

router.route('/place/:id')
                            .get(getPlaceById)
                            .put(isAuthenticatedUser, createPlaceReview)
                            

router.route('/admin/place/:id')
                                .put(isAuthenticatedUser, authorizedRoles('admin'), updatePlaceById)
                                .delete(isAuthenticatedUser, authorizedRoles('admin'), deletePlaceById)

router.route('/place/:placeId/reviews')
                                .get(isAuthenticatedUser, getPlaceReviews)

router.route("/place/:placeId/review/:reviewId")
                                                .put(isAuthenticatedUser, updatePlaceReview)
                                                .delete(isAuthenticatedUser, deletePlaceReview)





module.exports = router;