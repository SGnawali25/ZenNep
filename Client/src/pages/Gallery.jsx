import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

import Header from "../components/Header";
import Gallery_View from "../components/Gallery_View";
import { clearErrors, getPlaces } from "../actions/placeActions";
import Loader from "../components/Loader";


function Gallery() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const {places, error, loading} = useSelector(state => state.places)

  useEffect(() => {
    if (error){
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getPlaces());
  },[])

  return (
    <div>
      <Header />
      {loading == false ? (
        <>
        <div className="gallery_body">
        <div className="gallery_wrapper">
          {places.map(place=> 
            <Gallery_View key={place._id} place = {place}/> )}
        </div>
      </div>
        </>
      ) : <Loader/>}
    </div>
  );
}

export default Gallery;
