import React, { useState } from 'react'
import { assets } from '../../assets/assets';
import './Navbar.css'


const Navbar = () => {

    const [menu,setMenu] = useState("home")    
  return (
    <div className='navbar'>
       <img src={assets.logo} alt="" className="logo" />

       <ul className="navbar-menu">

            <il onClick={()=>setMenu("home")} className={menu === "home"?"active":""}>home</il>
            <il onClick={()=>setMenu("menu")} className={menu === "menu"?"active":""}>menu</il>
            <il onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>mobile-app</il>
            <il onClick={()=>setMenu("contact us")} className={menu === "contact us"?"active":""}>contact us</il>

       </ul>

       <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button>sign in</button>
       </div>
    </div>
  )
}

export default Navbar