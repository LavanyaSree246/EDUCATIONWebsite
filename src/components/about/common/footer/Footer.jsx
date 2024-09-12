import React from "react"

import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, any time any where</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
           </div> <div>
  
          <button className='btn'>Submit</button>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>A world of knoweledge at your fingertips.</p>
         </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>Home</li>
              <li>AboutUs</li>
              <li>Courses</li>
              <li>ContactUs</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>ContactUs</li>
              <li>OnlineCourses</li>
              <li>Feedbacks</li>
            </ul>
          </div>
         
          <div className='box last'>
            <h3>For Details</h3>
            <ul>
              <li>203,Mountain View,Malviya nagar,New Delhi,India</li>
              <li> +91 992 3929 210</li>
              <li> info@academia.com </li>  
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | This template is made <i className='fa fa-heart'></i> by Lavanya Sree
        </p>
      </div>
    </>
  )
}

export default Footer