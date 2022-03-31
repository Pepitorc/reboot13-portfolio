import React, {useState} from 'react'
import './navbar.css';
import {  RiMenu3Line, RiCloseLine} from 'react-icons/ri'
// import logo from '../../assets/logo.svg'
const Menu = () => (
  <>
          <p><a href="#home">Home</a></p>
          <p><a href="#projects">Projects</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#contact">Contact</a></p>
  </>
)
const Navbar = () => {
  const reboot13 = "</reboot13>"
  const transition = () => {
    "transition: all 3s ease;"
  }
  const [toggleMenu , setToggleMenu] = useState(false)
  return (
    <>
      <div className='navbar'>
      <div className='navbar-links'>

        <div className='navbar-links_logo'>
        <h1 className='primary-color'><a href="https://www.linkedin.com/in/reboot13/?originalSubdomain=in" target="_blank" className='primary-color'>{reboot13}</a></h1>
        </div>

        <div className="navbar-links_container">
          <Menu />
        </div>
        <div className="togglemenu">
        {toggleMenu
            ? <RiCloseLine color="#fff" className={"none"}  size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" className={"none"} size={27}  onClick={() => setToggleMenu(true)} />
            }
        </div>
      </div>
        </div>


        <div className="navbar-menu">
     
            {toggleMenu && (
              <div className='navbar-menu-container'>
                <div className='navbar-menu-container_links'>
                <Menu />
                </div>
              </div>
            )}
        </div>
    </>
  
  )
}

export default Navbar