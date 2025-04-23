import { React, useState } from 'react';
import './mainSection.css';
import Trending from '../trending/trending';
import PopularArtist from '../popularArtist/popularArtist';

const MainSection = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedMusic, setSelectedMusic] = useState(null); // ✅ selected song

  return (
    <main className="main-section">
      {currentPage === "home" ? (
        <>
          <Trending 
            setCurrentPage={setCurrentPage} 
            setSelectedMusic={setSelectedMusic} // ✅ pass down
          />
          <PopularArtist setCurrentPage={setCurrentPage} />
        </>
      ) : currentPage === "musicSpecificPage" ? (
        <>
          {/* Render music details */}
          {selectedMusic && (
            <div className="music-details">
              <img src={selectedMusic.imgSrc} alt={selectedMusic.heading} />
              <h2>{selectedMusic.heading}</h2>
              <p>{selectedMusic.subHeading}</p>
            </div>
          )}
        </>
      ) : currentPage === "artistSpecificPage" ? (
        <>Artist Page</>
      ) : null}
    </main>
  );
}

export default MainSection;
