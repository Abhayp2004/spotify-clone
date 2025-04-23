import React from 'react'
import './trending.css'
import TrendingCard from '../trendingCard/trendingCard'

const Trending = ({setCurrentPage,setSelectedMusic}) => {
  return (
    <div className='trendingSectionMainContainer'>
      <span>
      Trending Songs
      </span>
     
      <TrendingCard setCurrentPage={setCurrentPage} setSelectedMusic={setSelectedMusic}/>
    </div>
  )
}

export default Trending
