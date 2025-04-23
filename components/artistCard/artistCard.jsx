import React from 'react';
import './artistCard.css';
import kkImage from './kk.png';
import arijitImage from './arijit.png';
import atifImage from './atif.png';
import paponImage from './papon.png';
import akonImage from './akon.png';
import icon from './icon.png';

const ArtistCard = ({setCurrentPage}) => {  // ✅ Destructure props here
  const artistList = [
    { img: kkImage, name: "KK" },
    { img: arijitImage, name: "Arijit Singh" },
    { img: atifImage, name: "Atif Aslam" },
    { img: paponImage, name: "Papon" },
    { img: akonImage, name: "Akon" },
  ];

  return (
    <div onClick={() => {
        setCurrentPage("artistSpecificPage");
      }} 
      className='artistCardMainContainer'
    >
      {artistList.map((artist, index) => (
        <div key={index} className='artistCard'>
          <img src={artist.img} alt={artist.name} />
          <h3>{artist.name}</h3>
          <span id="playButton">
            <img src={icon} alt="icon" />
          </span>
        </div>
      ))}
    </div>
  );
};

export default ArtistCard;
