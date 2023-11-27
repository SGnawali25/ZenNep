import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";

import Header from "../components/Header";
import SlideShow from "../components/SlideShow";
import {getPlaceDetails, createPlaceReview} from '../actions/placeActions';
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Comment_Section from "../components/Comment_section";
import Review_Section from "../components/Review_Section";



function Place_Info() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const params = useParams();

  const {loading, place} = useSelector(state => state.place)
  const {user, isAuthenticated} = useSelector(state => state.auth)
  

  
  const [image, setImage] = useState("")
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")



  useEffect(() => {
    if (!isAuthenticated && loading == false){
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
    // setImage(place.images[0])
  }, [dispatch, params.id]);


const changeImage = (image) => {
  setImage(image);
}


const submitHandler = (e)=> {
  e.preventDefault();
  const comment = review;
  dispatch(createPlaceReview(place._id, comment, rating));
  setReview("")


}  
  return (
    <div>
      {loading == false ?  (
        <>
          <Header />
          <div className="Info_Container">
            <div className="Img_Left">
              <img src={image.url || place.images[0].url} />
              <div className="Destination_Name">{place.name}</div>
            </div>
            <div className="Info_Right">
              <div className="Rating_section">
              
                <div className="stars">
                  <input type="radio" name="rating4" value="1" checked= {1<=place.ratings} readOnly/>
                  <input type="radio" name="rating4" value="2" checked= {2<=place.ratings} readOnly/>
                  <input type="radio" name="rating4" value="3" checked= {3<=place.ratings} readOnly/>
                  <input type="radio" name="rating4" value="4" checked= {4<=place.ratings} readOnly/>
                  <input type="radio" name="rating4" value="5" checked= {5<=place.ratings} readOnly/>
                  <i></i>
                </div>
                <div className="Rate_Count">{place.rating}</div>
              </div>
              <SlideShow images={place.images} changeImage = {changeImage}/>
              <div className="information">
                {place.description}
              </div>

              <form onSubmit={submitHandler}>
                <div className="Rater">
                  <div className="Rate_Line"> Rate This place </div>
                  <div className="Rating_Time">
                    <div className="stars">
                      <input type="radio" name="rating" value={rating} onChange={(e) => setRating(1)} />
                      <input type="radio" name="rating" value={rating} onChange={(e) => setRating(2)} />
                      <input type="radio" name="rating" value={rating} onChange={(e) => setRating(3)} />
                      <input type="radio" name="rating" value={rating} onChange={(e) => setRating(4)} />
                      <input type="radio" name="rating" value={rating} onChange={(e) => setRating(5)} />
                      <i></i>
                    </div>

                    <div className="Rate_Message">
                      <input
                        type="text"
                        className="Rate_text"
                        placeholder="Did you like it?"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <input type="submit" value="Submit Your Review" />
              </form>
              <div className="reviews">
            {place.reviews.map((review) => (<Review_Section key ={review._id} review = {review}/>))}
          </div>
            </div>
          </div>
          
        </>
      ) : (<Loader />) }
    </div>
  );
}

export default Place_Info;
