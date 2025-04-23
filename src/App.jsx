import {React,useState} from 'react'
import './App.css'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import MainSection from '../../MainSection/MainSection'
import Trending from '../components/trending/trending'
import PopularArtist from '../components/popularArtist/popularArtist'

function App() {
  return (
    <div className="app-container">
      <div className="main-container">
        <Navbar />
        <div className="content-container">
          <Sidebar />
          <div className="main-content">
            <Trending />
            <PopularArtist  />
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
