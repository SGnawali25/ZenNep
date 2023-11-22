import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";

import Header from "../components/Header";
import SlideShow from "../components/SlideShow";
import {getPlaceDetails} from '../actions/placeActions';
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";



function Place_Info() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const params = useParams();

  const {loading, place} = useSelector(state => state.place)
  const {user, isAuthenticated} = useSelector(state => state.auth)

  

  const [rating, setRating] = useState(0)
  // const reviews = place.reviews;

  // const review = reviews.filter(review => review.user.toString() === user._id.toString());
  // if (review.length == 0){
  //   setRating(0)
  // } else {
  //   setRating(review.rating)
  // }


  useEffect(() => {
    if (!isAuthenticated){
      alert.error("Please login to view the place details.");
      navigate("/places")
    }
    const fetchData = async () => {
      try {
        await dispatch(getPlaceDetails(params.id));
      } catch (error) {
        console.error('Error fetching place details:', error);
      }
    };

    fetchData();

    // const reviews = place.reviews;

    // const review = reviews.filter(review => review.user.toString() === user._id.toString());

    // const [rating, setRating] = useState(0)
    // if (review.length == 0) {
    //   setRating(0)
    // } else {
    //   setRating(review.rating)
    // }
  }, [dispatch, params.id]);

  useEffect(() => {

  })
  

  return (
    <div>
      {loading == false ?  (
        <>
          <Header />
          <div className="Info_Container">
            <div className="Img_Left">
              <img src={place.images.url} />
              <div className="Destination_Name">{place.name}</div>
            </div>
            <div className="Info_Right">
              <div className="Rating_section">
                <div className="stars">
                  <input type="radio" name="rating4" value="1" checked= {1<=place.ratings}/>
                  <input type="radio" name="rating4" value="2" checked= {2<=place.ratings}/>
                  <input type="radio" name="rating4" value="3" checked= {3<=place.ratings} />
                  <input type="radio" name="rating4" value="4" checked= {4<=place.ratings}/>
                  <input type="radio" name="rating4" value="5" checked= {5<=place.ratings}/>
                  <i></i>
                </div>
                <div className="Rate_Count">{place.rating}</div>
              </div>
              <SlideShow />
              <div className="information">
                {place.description}
              </div>

              <div className="Rater">
                <div className="Rate_Line"> Rate This place </div>
                <div className="Rating_Time">
                  <div className="stars">
                    <input type="radio" name="rating" value={rating} />
                    <input type="radio" name="rating" value={rating} />
                    <input type="radio" name="rating" value={rating} />
                    <input type="radio" name="rating" value={rating} />
                    <input type="radio" name="rating" value={rating} />
                    <i></i>
                  </div>
                  <div className="Rate_Message">
                    <input
                      type="text"
                      className="Rate_text"
                      placeholder="Did you like it?"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (<Loader />) }
    </div>
  );
}

export default Place_Info;
