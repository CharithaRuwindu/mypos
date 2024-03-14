import React from 'react';
import profilepic from '../assets/profile.png'
import './navbar.css'
function navbar() {

    return (

    
    <div className='content'>
        <p className='posname'>STOREMATE</p>
        <p className='myname'>Charitha</p>
        <img src={profilepic} alt="profile" className='profilepic'/>
    </div>


    )
    
}
export default navbar