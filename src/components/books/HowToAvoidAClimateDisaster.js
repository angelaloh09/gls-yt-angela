import React from 'react'
import Navbar from '../Navbar'
import '../styles/Styles.css'
import style from '../styles/bookshelf.module.css'
// import * as fs from 'fs'
// import { readFileSync } from 'fs'
// import marked from 'marked';



// // // // Read the markdown file

// // // // Parse the markdown content
// const htmlContent = marked(markdownContent);
// readFileSync('./markdown/HowToAvoidAClimateDisaster.md', 'utf8');


// 

const HowToAvoidAClimateDisaster = () => {
    return (
        <section className='ideas'>
            <Navbar/>
            <div className="bookshelf"> 
                <div className="cards title">
                  <h1>How To Avoid A Climate Disaster</h1>
                  <br></br>
                </div>
                
                <div class= {style.Writing}>
                  <p>
                  This is one of the best books I’ve read in quite some time! Bill Gates does a really great job of describing the challenges our world will face if developed countries aren’t able to reach zero carbon emissions by 2050. He highlights action steps that need to be taken and technologies currently in development or that need to be invented in order to achieve this ambitious goal of carbon-zero. Bill Gates also is objectively a really great writer. Even the way he starts his book is quite memorable. He says, “There are two numbers you need to know about climate change. The first is 51 billion. The other is zero. Fifty-one billion is how many tons of greenhouse gases the world typically adds to the atmosphere every year...This is where we are today. Zero is what we need to aim for” (3). 51 billion tons serves as a goal of a quantity we want to reduce, and Gates shows us how we can do this. This book not only conveys the sense of urgency we should all feel about the looming issue of climate change, but Gates also instills in the readers a sense of optimism that we will be able to avoid a climate disaster if we take action -- in technology, policy, and our daily lives -- today.
                  </p>
                  <h2>
                  1/ WHY DO WE NEED TO REACH CARBON-ZERO BY 2050?
                  </h2>
                  <p>
                  Greenhouse gases absorb and trap heat, causing the average surface temperature of the earth to go up. (1/5th of CO2 emitted today will persist in the atmosphere for 10,000 years. [18]
                  They work the same way a greenhouse works. Example of a car sitting in the sun: windshield lets the sunlight in, then traps some of that energy. Thus why the car gets much hotter on the inside than the outside. [22, 23]
                  </p>
                  <p>
                  How does a hotter climate affect our planet?
                  <ol>
                    <li>There will be more frequent and destructive wildfires. Warm air absorbs moisture from plants and soil, leaving everything more prone to burning (ie. dry wood vs. damp wood).</li>
                    <li>Sea levels will go up due to the polar ice melting and seawater expanding (since 90% ofthe planet’s heat will be absorbed by oceans). Rising sea levels will be worse for the poorest people in the world who do not have the infrastructure to defend against resulting natural disasters. (ie. Bangladesh, a poor country that’s making good progress on the path out of poverty, mostly sits in low-lying flood-prone river deltas. “Thanks to cyclones, storm surges, and river floods, it is now common for 20-30% of Bangladesh to be underwater, wiping out crops and homes and killing people throughout the country.” [29])</li>
                    <li>Plants and animals are being affected. “According to research cited by the IPCC, a rise of 2oC would cut the geographic range of vertebrates by 8 percent, plants by 16 percent, and insects by 18 percent.” [29].</li>
                  </ol>
                  </p>
                  <p>
                    Despite the remaining scientific uncertainties and many other effects of climate change, here are two things we can do about it: [35]
                    <ol>
                      <li>Adaptation: minimize the impact of the changes that are already here and that we know are coming. “Gates foundation is funding a lot of research into new varieties of crops that tolerate droughts and floods that will be more frequent and severe in coming decades.”</li>
                      <li>Mitigation: ways to stop adding greenhouse gases to the atmosphere. “To have any hope of staving off disaster, the world’s biggest emitters — the richest countries — have to get to net-zero emissions by 2050.”</li>
                    </ol>
                  </p>

                  <h2>
                  2/ CURRENT STATE OF THE WORLD
                  </h2>
                  <p>
                  Fossil Fuels are everywhere. They are so pervasive that it can be hard to grasp all the ways in which they touch our lives. Did you brush your teeth this morning? The toothbrush probably contains plastic, which is made from petroleum, a fossil fuel. If you ate breakfast, the grains in your cereal were grown with fertilizer, which releases greenhouse gases when it’s made. Take oil as just one example: The world uses more than 4 billion gallons every day. There’s a very good reason why fossil fuels are everywhere: They’re so inexpensive. Oil is cheaper than a soft drink.”
                  </p>
                  <p>
                  Problems with policies:
                    <ol>
                      <li>Our laws and regulations are outdated.</li>
                      <li>Our approach to climate and energy keeps changing with the election cycle [48].</li>
                      <li>Global cooperation is difficult. No single country wants to pay to mitigate its emissions unless everyone else will too.</li>
                    </ol>
                  </p>
                  <p>
                    “To sum up: We need to accomplish something gigantic we have never done before, much faster than we have ever done anything similar. To do it, we need lots of breakthroughs in science and engineering. We need to build a consensus that doesn’t exist and create public policies to push a transition that would not happen to others” [51].
                  </p>
                  <p>5 QUESTIONS WE SHOULD BE ASKING (in climate conversations)
                    <ol>
                        <li>How Much of the 51 Billion Tons Are We Talking About? Whenever you see some number of tons of greenhouse gases, convert it to a percentage of 51 billion, which is the world’s current yearly total emissions (in carbon dioxide equivalents)” [54].</li>
                        <li>What’s Your Plan for All Five Different Sectors? Remember that semissions come from five different activities. You need solutions in all of them.</li>
                        <li>How Much Power Are We Talking About? Good approximations for power (watts per day): Whenever you hear “kilowatt”, think “house.” “Gigawatt,” think “city.” A hundred or more gigawatts, think “big country.” The US consumes about 1,000 gigawatts per day. [57]</li>
                        <li>How Much Space Do You Need? Some power sources take up more room than others. This matters for the obvious reason that space is limited. Power density is important. Nuclear has such a high energy density!!! [57, 58]</li>
                        <li>How Much Is This Going to Cost?
                          <ul>
                            <li>The reason the world emits so much greenhouse gas is that our current energy technologies are by and large the cheapest ones available.</li>
                            <li>Green Premiums are the additional costs of the zero-carbon solutions vs. the fossil-fuel counterparts, and we should keep these in mind and ask whether they’re low enough for middle-income countries to pay. [59]</li>
                          </ul>
                        </li>
                    </ol>
                  </p>



                  <h2>
                  3/ THE BIG FIVE PILLARS
                  </h2>
                  <h3>3.1/ ELECTRICITY</h3>
                  <h3>3.2/ HOW WE MAKE THINGS</h3>
                  <h3>3.3/ AGRICULTURE</h3>
                  <h3>3.4/ TRANSPORTATION</h3>
                  <h3>3.5/ HEATING & COOLING</h3>
                  <h3>3.6/ SUMMARY + OTHERS</h3>


                </div>             

            </div>

        </section>
    )
}

export default HowToAvoidAClimateDisaster
