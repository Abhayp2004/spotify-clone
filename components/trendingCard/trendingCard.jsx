import {React,useState} from 'react'
import './trendingCard.css'
import img1 from '../../src/assets/images/img1.png'
import img2 from '../../src/assets/images/img2.png'
import img3 from '../../src/assets/images/img3.png'
import img4 from '../../src/assets/images/img4.png'
import img5 from '../../src/assets/images/img5.png'
import img6 from '../../src/assets/images/img6.png'
import icon from './icon.png'

const TrendingCard = ({setCurrentPage}) => {
  const arr = [
    {
      imgSrc: img1,
      heading: "Hurry Up Tommorow",
      subHeading: "The Weekend"
    },
    {
      imgSrc: img2,
      heading: "Fighting Demons(Deluxe)",
      subHeading: "Juice WRLD"
    },
    {
      imgSrc: img3,
      heading: "Hollywood's Bleeding",
      subHeading: "Post Malone"
    },
    {
      imgSrc: img4,
      heading: "Making Memories",
      subHeading: "Karan Aujla,Ikky"
    },
    {
      imgSrc: img5,
      heading: "Young G.O.A.T",
      subHeading: "Cheema Y"
    },
  
  ]
  console.log("typeof setCurrentPage:", typeof setCurrentPage);

  return (
    <div  className='trendingCardMainContainer'>
      
      {arr.map((item, index) => (
       <div 
       onClick={() => {
         setCurrentPage("musicSpecificPage")
       }} 
       className="cardContainer" 
       key={index}
     >
     
       
          <img src={item.imgSrc} alt={item.heading} />
          <span className="playButton">
  <img id="hello" src={icon} alt="icon" />
</span>

          <div className='cardTextContainer'>
          
          <h3 style={{ marginBottom: '0px' ,marginTop:'0px',color:'whitesmoke',marginLeft:'25px'}}>{item.heading}</h3>
          <p style={{marginBottom:'0px',marginTop:'0px',marginLeft:'30px',color:'white'}}>{item.subHeading}</p>
          </div>
        </div>
      ))}

    </div>
  )
}

export default TrendingCard
