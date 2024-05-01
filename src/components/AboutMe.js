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
                    <p> This website has been a long time coming, and I’ve especially been holding off completing this “About Me” page. 
                      I don’t particularly like talking about myself, but I also understand the importance of introductions...
                      and it’s basic human courtesy! To make this a bit easier for myself, this “About Me” page will be more about why 
                      I wanted to make this blog in the first place, and in the process, shed some light about who I am. 
                    </p>
                    <p>
                      For starters, I’ve always wanted to make a blog for myself to document my takeaways
                      on books I’ve read, random thoughts I’ve had, and have a little scratchpad of things I really enjoy.
                    </p>
                    <p>
                      A little bit about me... I graduated from Cornell Dec. 2022 having studied Electrical Engineering and Computer Science, 
                      and now I’m over a year out from college & currently work at startup called Humane as an Electrical Engineer. But, one thing I’ve realized 
                      during college and post-grad is that Engineering in school and in industry isn’t entirely what I expected it to be. 
                    </p>
                    <p>
                      I entered the Electrical Engineering field because I was always curious about learning how things worked - sometimes 
                      I’ll spend a good chunk of time learning more about something new, and other times, 
                      my questions will remain fleeting thoughts that I never end up looking into. 
                      But in practice, I don't get to explore that many of my random thoughts & questions as often as I would've hoped to.
                      And over the past year, I couldn't help but feel that I'm not as curious as I use to be. 
                    </p>

                    <p>
                      However, after starting this website and making some notebook scribbles here and there, I’ve proven myself wrong. I am just as curious as 
                      I use to be, but I just need to dedicate time to thinking about and documenting my thoughts - and it makes me really happy when I do. :)
                    </p>

                    <p>
                      I'm currently based in San Francisco, California. If you're in the area and would like to meet up, feel free 
                      to message me at <u>angelaloh09@gmail.com</u>. Or if 
                      you want to chat (book recs, opinions, etc.), feel free to email me as well - I like making new connections!
                    </p>

                    <p>
                      If you’ve read until here, thank you very much for spending the time to visit my page!
                      It’s a work-in-progress, but I’m excited to be on this journey with you to learn new things 
                      and feel curious & tiny in this huge world of unexplainable wonders! For certain posts, I'll try my best to explain things to a level 
                      that a 5th grader would understand. But then again, some phenomenons are yet to be uncovered and made truly human-sensical.
                    </p>
                    <p>
                      Sincerely, 
                      <br></br>
                      Angela 
                    </p>
                </div>

            </div>

        </section>
    )
}

export default AboutMe

