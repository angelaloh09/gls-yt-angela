import React from 'react'
import Navbar from '../Navbar'
import '../styles/Styles.css'
import style from '../styles/thoughts.module.css'


const CapacitiveTouch = () => {
    return (
        <section className='ideas'>
            <Navbar/>
            <div className="thoughts"> 
                <div className="cards title">
                  <h1 class = {style.Layout}>Capacitive Touch</h1>
                  <br></br>
                </div>
                
                <div class = {style.CapTouchSlide}>
                  <img src="/capacitive-touch/capacitive-touch_self-cap.png" alt="Self Capacitance" class = {style.CapTouchImage}/>
                  <br></br>
                  <img src="/capacitive-touch/capacitive-touch_mutual-cap.png" alt="Self Capacitance" class = {style.CapTouchImage}/>
                </div>
                
            </div>

        </section>
    )
}

export default CapacitiveTouch
