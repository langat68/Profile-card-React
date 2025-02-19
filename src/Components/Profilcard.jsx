import React from 'react'

const ProfilCard = ({ name, age, profilePicture, bio }) => {
    return (
      <div className="profile-card">
        <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
        <h2 >{name}</h2>
        <p >Age: {age}</p>
        <p >{bio}</p>
      </div>
    );
  };
  
  export default ProfilCard;
