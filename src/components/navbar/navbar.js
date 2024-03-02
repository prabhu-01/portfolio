import React from 'react'
import './navbar.css';
import mylogo from './logo.png';
function navbar({activeTab}) {
  return (
    <div className='navbar'>
        <div className='desktop_nav'>
            <div className='left_nav'>
                <img className='brand_logo' src={mylogo} alt=''></img>
            </div>
            <div className='right_nav'>
                <div className={activeTab === 'home' ? 'nav_menu_option_active' : 'nav_menu_option'}>Home</div>
                <div className='nav_menu_option'>About us</div>
                <div className='nav_menu_option'>Contact us</div>
            </div>
        </div>

    </div>
  )
}

export default navbar