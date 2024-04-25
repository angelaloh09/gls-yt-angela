import React from 'react'
import Navbar from './Navbar'
import './styles/Styles.css'
import style from './styles/thoughts.module.css'


const Thoughts = () => {
    return (
        <section className='ideas'>
            <Navbar/>
            <div className="bookshelf"> 
                <div className="cards title">
                    <h1>Thoughts</h1>
                    <br></br>
                </div>

                <div className={style.GridContainer}>
                        <span>1.1.23</span>
                        <span>What is capacitive touch? And how does it work?</span>
                </div>

                <div className={style.GridContainer}>
                        <span>1.1.23</span>
                        <span>Why do LEDs use less energy than incandescent bulbs?</span>
                </div>
            
                <div className={style.GridContainer}>
                    <span>1.1.23</span>
                    <span>The Brief History of Cellular Data.</span>
                </div>
                
            </div>

        </section>
    )
}

export default Thoughts
