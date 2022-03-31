import React from 'react'
import './contact.css'
import '../../App.css'
import Plane from '../../assets/plane.png'

const Contact = () => {
  return (
    <>
    <div className="contact">
        <div className="leftside">
            <h3>Contact</h3>
            <p>Want a website for you brand and business? <br /> 
                I design what you desire...
            </p>
            <img src={Plane} alt="" />
        </div>

        <div className="rightside">
            <form action="#" className='form'>
                <div className="name">
                    <h5>Name</h5>
                    <input type="text" name="name" placeholder='Your Name' />
                </div>
                <div className="email">
                    <h5>Email</h5>
                    <input type="text" name="email" placeholder='Your Email' />
                </div>
                <div className="message">
                    <h5>Message</h5>
                    <textarea name="message" cols="30" ></textarea>
                </div>
                <div className="submit">
                   <button type="submit" className='submit-btn'>Submit</button>
                </div>

            </form>
        </div>
    </div>
    </>
  )
}

export default Contact