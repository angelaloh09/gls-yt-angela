import React from 'react'
import Navbar from './Navbar'
import './styles/Styles.css'
import style from './styles/bookshelf.module.css'

const Bookshelf = () => {
    return (
        <section className='ideas'>
            <Navbar/>
            <div className="bookshelf">
                <div className="cards title">
                    <h1>Bookshelf</h1>
                    <br></br>
                </div>
                <div className="cards title">
                    <h2>2025</h2>
                </div>
                <div className="cards title">
                    <h2>2024</h2>
                </div>

                <div class = {style.GridContainer}>
                    <span>How to Avoid a Climate Disaster</span>
                    <span>Bill Gates</span>
                </div>
                
                <div class = {style.GridContainer}>
                    <span>What You Are Looking For Is in the Library</span>
                    <span>Michiko Aoyama</span>
                </div>

                <div class = {style.GridContainer}>
                    <span>Three Body Problem</span>
                    <span>Liu Cixin</span>
                </div>

                <div class = {style.GridContainer}>
                    <span>The Idea Factory</span>
                    <span>Jon Gertner</span>
                </div>

                <div class = {style.GridContainer}>
                    <span>Lean In</span>
                    <span>Sheryl Sandberg</span>
                </div>

                <div class = {style.GridContainer}>
                    <span>Bad Blood</span>
                    <span>John Carreyrou</span>
                </div>

            </div>

        </section>
    )
}

export default Bookshelf
