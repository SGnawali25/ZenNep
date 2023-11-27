import React, {useEffect, useState, Fragment} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'

import { clearErrors, getAllUsers } from '../actions/userActions'
import Header from '../components/Header'
import UserProfile from '../components/UserProfile'
import Loader from '../components/Loader'

const AllUsers = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useAlert();

    const {users, error, loading} = useSelector(state =>  state.users)
    
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getAllUsers());
    }, [])
    console.log(users)

  return (
      <Fragment>
          <Header />
          {loading === false ? (
              <>
                <h1>Users</h1>
                <div className="users-container">
                    <div className="user">
                        {users &&
                            users.map((user) => (
                                <UserProfile user={user} key={user._id} />
                            ))}
                    </div>
                </div>
              </>
          ) :
              <Loader />}

      </Fragment>
    
  )
}

export default AllUsers