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
                      <li>
                     <a
                         href="https://www.youtube.com/watch?v=IlG3X8zRI2I&t=9"
                         target="_blank"
                         rel="noopener noreferrer"
                         className={style.Link}
                       >
                       Robotic hands
                      </a>
                      &nbsp;at Figure, a humanoid robotics company.
                      </li>
                      <li>
                        Humane AiPin's &nbsp;
                        <a
                          href="https://www.youtube.com/watch?v=9lNIwOOMVHk&t=177s"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={style.Link}
                        >
                          laser display
                        </a>
                      </li>
                      <li> Founded a team to create an &nbsp; 
                        <a
                          href="https://alumni.cornell.edu/article/angela-loh-23-is-engineering-for-impact/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={style.Link}
                        >
                          automous beach roomba
                        </a> that collects macro+microplastics at Cornell.</li>
                      <li> Shipped&nbsp;
                        <a 
                        href="https://www.spacecraftresearch.com/pan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.Link}
                        >
                        two cube satellites
                        </a>
                        &nbsp;to space with the Cornell Space Systems Design Studio.</li>
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

