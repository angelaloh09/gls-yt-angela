import React from 'react'
import Navbar from './Navbar'
import './styles/Styles.css'
import style from './styles/aboutme.module.css'
import { Link } from 'react-router-dom'

const AboutMe = () => {
    return (
        <section className='ideas'>
            <Navbar/>
            <div class={style.PagePadding}>
                <div className="cards title">
                    <h1>About Me</h1>
                    <br></br>
                </div>
                
                <div class={style.Writing}>
                    <p> Hi there! </p>
                    <p> I'm a hardware engineer who wants to make tinkering on fun projects accessible to all! I have a curiosity for making the world a better place, and I'm always looking for new ways to do so. 
                        I love learning about how things work. Here are some of the things I've worked on: </p>
                    <ul>
                      <li> Robotic hands at Figure, a humanoid robotics company.</li>
                      <li> Humane aipin's laser display</li>
                      <li> Founded a team to create an automous beach roomba that collects macro+microplastics at Cornell.</li>
                      <li> Shipped two cube satellites to space with the Cornell Space Systems Design Studio.</li>
                    </ul>
                    <br></br>
                    <p> More hobbyist projects:</p>
                    <ul>
                      <li> 3D Printed Lamp (i love aesthetic lamps with warm lighting)</li>
                      <li> Vimputer (a digital typewriter with vim interface and infinite battery life)</li>
                    </ul>
                </div>

            </div>

        </section>
    )
}

export default AboutMe

