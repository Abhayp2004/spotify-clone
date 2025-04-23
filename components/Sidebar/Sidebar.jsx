import React from 'react'
import './sidebar.css'
import Cards from './Cards'


const Sidebar = () => {
  return (
    <div className='sidebarMainContent'>
      <div className='sidebarTopSection'>
    <p>Your Library&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</p>
        </div>
      <div className='sidebarMiddleSection'>
     <Cards heading="Create your first playlist" subheading="It's Easy,we will help you" buttontext="Create Now"/>
     <Cards heading="Lets find some podcast to follow" subheading="We will keep you updated" buttontext="Browse podcast"/>
      </div>
      <div className='sidebarBottomSection'>
        <div className='legalLinks'>
          <a href="#">Legal</a>
          <a href="#">Privacy Center</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
          <a href="#">About Ads</a>
          <a href="#">Accessibility</a>
        </div>
        <div className='languageButton'>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
              <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.838.704 1.486 1.596 1.884 2.093l.068-.067c-.412-1.283-1.17-2.332-2.094-3.071z"/>
            </svg>
            English
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
