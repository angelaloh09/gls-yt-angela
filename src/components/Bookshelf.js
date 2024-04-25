import React from 'react'
import Navbar from './Navbar'
import './styles/Styles.css'
import style from './styles/bookshelf.module.css'
import { Link } from 'react-router-dom'

const Bookshelf = () => {
    return (
        <section className='ideas'>
            <Navbar/>
            <div className="bookshelf">
                <div className="cards title">
                    <h1>Bookshelf</h1>
                    <br></br>
                </div>
                
                <div class = {style.GridContainer}>
                    <span>1.1.23</span>
                    <span>What You Are Looking For Is in the Library</span>
                    <span>Michiko Aoyama</span>
                </div>

                <div class = {style.GridContainer}>
                    <span>1.1.23</span>
                    <span>Three Body Problem</span>
                    <span>Liu Cixin</span>
                </div>

                <div class = {style.GridContainer}>
                    <span>1.1.23</span>
                    <span>The Idea Factory</span>
                    <span>Jon Gertner</span>
                </div>

                <Link to= '/bookshelf/how-to-avoid-a-climate-disaster' class = {style.GridContainer}>
                    <span>1.1.23</span>
                    <span>How to Avoid a Climate Disaster</span>
                    <span>Bill Gates</span>
                </Link>

                <div class = {style.GridContainer}>
                    <span>1.1.23</span>
                    <span>Lean In</span>
                    <span>Sheryl Sandberg</span>
                </div>

                <div class = {style.GridContainer}>
                    <span>1.1.23</span>
                    <span>Bad Blood</span>
                    <span>John Carreyrou</span>
                </div>

            </div>

        </section>
    )
}

export default Bookshelf
