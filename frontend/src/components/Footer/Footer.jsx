import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
        <div className="FooterContent">
            <div className="FooterContentLeft">
                <img src= {assets.logo} alt="" />
                <p>Our missionis to satisfy your cravings and elevate your dining experience , one delicious meal at a time.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="FooterContentRight">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
                
            </div>
            <div className="FooterContentCenter">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+213-660262588</li>
                    <li>Yahyamati8@gmail.com</li>
                </ul>
                
            </div>
           
        </div>

        <hr />
            <p className="footer-copyright">
                Comyright 2024 © Tomato.com - All Right Reserved.
            </p>

    </div>
  )
}

export default Footer