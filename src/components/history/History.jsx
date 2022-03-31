import React from 'react'
import './history.css'
import '../../App.css'
import CountUp from 'react-countup'
const History = () => {
  return (
    <div>
        <div className="history">
            <div className="history__content">
                <span className="numbers"><h5><CountUp start={0} end={50} duration={0.5} delay={0.2} />+</h5></span>
                <span className="title"><p>Projects Completed</p></span>
            </div>
            <div className="history__content">
                <span className="numbers"><h5><CountUp start={0} end={45} duration={0.5} delay={0.2} />+</h5></span>
                <span className="title"><p>Github Repository</p></span>
            </div>
            <div className="history__content">
                <span className="numbers"><h5><CountUp start={0} end={5} duration={0.5} delay={0.2} />+</h5></span>
                <span className="title"><p>Years of  Experience</p></span>
            </div>
            <div className="history__content">
                <span className="numbers"><h5><CountUp start={0} end={500} duration={0.5} delay={0.2} />+</h5></span>
                <span className="title"><p>Youtube Subscribers</p></span>
            </div>
        </div>
    </div>
  )
}

export default History