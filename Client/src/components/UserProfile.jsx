import React, { useState, useEffect } from 'react';

const UserProfile = ({user}) => {
    console.log("userData")
    console.log(user)
  return (
    <div>
      {user ? (
        <div>
          <img src={user.image.url} alt="User Avatar" style={{ width: '100px', height: '100px' }} />
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserProfile;
