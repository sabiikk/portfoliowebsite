import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
// import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-300px";
  }

  return (
    <div className='navbar'>
      {/* <img src={logo} alt="" className='logo'/> */}
      <h2>SABIK</h2>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' href='#home' offset={100}><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"}</li>
        {/* <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"}</li> */}
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
      </ul>
      <div className="nav-connect">
  <a href="https://wa.me/qr/QG3FKILWDQPDO1" style={{textDecoration:'none'}}>
    <AnchorLink className="anchor-link" offset={50}>
      <span id="cntme">Connect With Me</span>
    </AnchorLink>
  </a>
</div>
    </div>
  )
}

export default Navbar
