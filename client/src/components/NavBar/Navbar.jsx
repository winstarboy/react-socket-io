import React from 'react'
import './Navbar.css'
import Notification from '../../img/notification.svg'
import Settings from '../../img/settings.svg'
import Message from '../../img/message.svg'

export const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">Kiwi</span>
        <div className="icons">
            <div className="icon">
                <img src={Notification} alt="notification" className='iconImg'/>
                <div className="counter">2</div>
            </div>
            <div className="icon">
                <img src={Message} alt="notification" className='iconImg'/>
                <div className="counter">2</div>
            </div>
            <div className="icon">
                <img src={Settings} alt="notification" className='iconImg'/>
                <div className="counter">2</div>
            </div>
        </div>
    </div>
  )
}
