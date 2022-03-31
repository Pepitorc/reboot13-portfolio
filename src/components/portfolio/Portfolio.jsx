import React from 'react'
import './portfolio.css'
import '../../App.css'
import laptop from '../../assets/laptop1.png'

const Portfolio = () => {
  return (
    <div className='portfolio'>
            <div className="portfolio-content">
                    <div className="portfolio-left">
                    <div className="heading">
                    <h1>Hello<br />
                    I am <span className='primary-color'>Krutik Raut</span>
                    </h1>
                    <p>Web Designer/Developer</p>  
                    </div>

                    <div className="buttons">
                        <span className='btn'><a href="#">Contact</a></span> 
                        <span className='btn-primary'><a href="#">Projects</a></span> 
                    </div>
                </div>

                <div className="potfolio-right">
                    <img src={laptop} alt="laptop" />
                </div>
            </div>

    </div>
  )
}

export default Portfolio