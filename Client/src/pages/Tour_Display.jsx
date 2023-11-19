import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";

import Tour_FlashCard from "../components/Tour_FlashCard";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import {getPlaces} from '../actions/placeActions'
import Loader from "../components/Loader";
import {createPlace, clearErrors} from "../actions/placeActions"


function Tour_Display() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const params = useParams();
  const keyword = params.keyword
  const {places, error, loading} = useSelector(state => state.places);
  const {user, isAuthenticated} = useSelector(state => state.auth);
  const {place} = useSelector(state => state.createPlace)
  const createPlaceError = useSelector(state => state.createPlace.error)
  const userLoading = useSelector(state=> state.auth.loading)
  const createdPlace = useSelector(state => state.createPlace.place)

  const [name, setName] = useState("")
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState("");
  const [role, setRole] = useState("user")
  

  const onChange = e => {
        
    const reader = new FileReader();

    reader.onload = () => {
        if (reader.readyState === 2){
            setImages(reader.result)
        }

    }
    reader.readAsDataURL(e.target.files[0])
}

const submitHandler = async(e) => {
    e.preventDefault();

    await dispatch(createPlace(name, location, description, images))
    dispatch(getPlaces())

    if(createPlaceError){
      alert.error(createPlaceError.message)
    } else {
      setName("")
      setDescription("")
      setLocation("")
      setImages('')
      alert.success("Place created successfully")
    }

}


  useEffect(() => {
    if (error){
      alert.error(error.message);
      dispatch(clearErrors())
    }

    else if (createPlaceError){
      alert.error(createPlaceError.message);
      dispatch(clearErrors())
    }

    // if (createdPlace.length > 0){

    // }

    if (!isAuthenticated){
      setRole("user");
    } else {
      setRole(user.role);
    }
    const role = user.role || "user";
    dispatch(getPlaces(keyword));


  }, [keyword, createPlaceError, dispatch])


  
  return (
    <div>
      <Header />
      {userLoading == false && role == 'admin' && (
        <>
          <div className="create_place">
            <div className="Story_container">
              <div className="Story_body">
                <div className="container">
                  <div className="wrapper">
                    <section className="post">
                      <header>Create New Place</header>
                      <form onSubmit={submitHandler}>
                        <div className="content">
                          <img src={user.image.url} alt="avatar" />
                          <div className="details">
                            <div className="account_name">{user.name}</div>
                          </div>
                        </div>
                        <div className="create_place_input">
                          <input
                            placeholder="Name of the place"
                            spellCheck="false"
                            name="placeName"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="create_place_input">
                          <input
                            placeholder="Location of the place"
                            spellCheck="false"
                            name="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                          />
                        </div>

                        <div className="create_place_input">
                          <input
                            placeholder="Description of the place"
                            spellCheck="false"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                          />
                        </div>


                        <div className="options">
                          <input
                            className="upload_img"
                            type="file"
                            id="upload_img"
                            accept=".jpg, .png, .pdf"
                            name="picture"
                            onChange={onChange}
                            multiple
                          />


                          <ul className="list">
                            <li>
                              {/* <img src={picture} /> */}
                            </li>
                          </ul>
                        </div>
                        <button
                          type="submit"
                          disabled={loading ? true : false}
                        >Create Place</button>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      
      {loading ? (<Loader />) : (
        <>
          <div className="subheader">
            <Searchbar keyword={keyword}/>
          </div>
          <div className="blog-wrapper">
            {places.length > 0 ? (
              places.map((place) => (
                <Tour_FlashCard key = {place._id} place = {place}/>
            ))
            ): (
              <>
              <h1>Sorry! Please Try somewhere else</h1>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Tour_Display;
