import React from 'react'
import './home.css';
import Navbar from '../../components/navbar/navbar';
function home() {
  return (
    <div className='home'>
        <Navbar activeTab="home"/>
    </div>
  )
}

export default home