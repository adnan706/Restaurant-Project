import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className='heading'>ABOUT US</h1>
                    <p>The only food thing we're serious about id food.</p>
                </div>
                <p className='mid'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel nihil repudiandae odio totam officia necessitatibus fugit animi praesentium id!
                </p>
                <Link to={"/"}>Explore Menu <span>
                    <HiOutlineArrowRight/>
                  </span></Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="About" />
            </div>
        </div>
    
    </section>
  )
}

export default About