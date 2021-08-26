import React from 'react'

import nene from '../assets/marina-braholka.png'

import '../styles/about.css'

const About = () => {
  return (
    <div className="about">
      <h2 className="notransform">Hello,</h2>
      <main>
        <div>
          <p>My name is Marina Braholka, I am a Product designer based in Vancouver, Canada. I graduated in 2014 in Graphic Design at the Federal University of Technology of Parana. I was working, since 2011, in advertising agencies and mid-size companies, I was unsatisfied about it because I didn’t have more things to learn or improve on offline media and I thought it is too boring. </p>
          <p>In 2016, a friend of mine came back from England after studying UX /UI Design, then showed it to me, I immediately felt in love with it, so I decided to change my career completely. Since that time I am working with digital agencies, software companies, improving and creating from scratch awesome digital products.</p>
          <p>I am highly skilled in creating user flows, user journeys, architecture information, personas, wireframes, prototypes and style guides, I also have a brief experience work with Lighting Design System from Salesforce. </p>
          <p>My toolset includes Adobe XD, Figma, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe Lightroom, Invision App, Marvel App, UXPIN, Axure RP, and proto.io.</p>
          <p>In my free time I love to make illustrations for fun (you can see some of them on my Dribbble account).</p>
        </div>
        <aside>
          <img src={nene} alt="nene" />
        </aside>
      </main>
    </div>
  )
}

export default About