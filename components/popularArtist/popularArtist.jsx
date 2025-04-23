import React from 'react';
import './popularArtist.css';
import ArtistCard from '../artistCard/artistCard';

const PopularArtist = ({ setCurrentPage }) => {  // ✅ Destructure here
  return (
    <div className='popularArtistsMainContainer trendingSectionMainContainer'>
      <span>Popular Artists</span>
      <ArtistCard setCurrentPage={setCurrentPage} />  {/* ✅ Pass it down */}
    </div>
  );
};

export default PopularArtist;
