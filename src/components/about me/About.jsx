import React from 'react'
import './about.css'
import '../../App.css'
import MobilePhone from '../../assets/mobile-mock.png'

const About = () => {
  return (
    <>
    <div className="aboutme">
        <div className="leftside">
            <div className="line"><div className='bar'></div></div>
            <div className="heading">
                <h2>A Bit About Me...</h2>
            </div>

            <div className="para">
                <p>Hello, My name is Krutik Raut AKA reboot13. <br />
                I am a CSE  Undergraduate at Parul University. <br />
                I'm currently learning UI/UX development. Checkout my projects on github.<br />
               <span className='primary-color'>@reboot13-git</span> </p>
            </div>

        </div>

        <div className="rightside">
                <img src={MobilePhone} alt="Phone" />
        </div>
    </div>
    </>
  )
}

export default About