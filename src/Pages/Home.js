import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='section'>
        <div className='container'>
            <div className='header-content'>
            <h1>SOMETHING AWESOME IS <br/> COMING SOON</h1>
            </div>

            <p>Your all-in-one affilate marketing tracking software track, automate and <br/> optimize your capaigns. </p>

            <div className='box-container'>
                <div className='box'>
                <h3>7</h3>
                <span>Days</span>
                </div>

                <div className='box'>
                <h3>24</h3>
                <span>Hours</span>
                </div>
                
                <div className='box'>
                <h3>54</h3>
                <span>Minutes</span>
                </div>

                <div className='box'>
                <h3>11</h3>
                <span>Seconds</span>
                </div>
            </div>

            <div className='input_wrapper'>
                
                <div className='input_data'>
                <label> First Name. </label>
                <input type='text' className='input'/>
                </div>

                <div className='input_data'>
                <label> Last Name. </label>
                <input type='text' className='input'/>
                </div>

            </div>

            <div className='email_wrapper'>
              <input type='email' placeholder='enter your email address'/>
              <button className='btn'>JOIN OUR WAITING LIST</button>
            
            </div>
    
        </div>
    </div>
  )
}

export default Home






