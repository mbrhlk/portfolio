import p0101 from '../assets/project01_thumb.png'
import p0102 from '../assets/project01_img02.png'
import p0201 from '../assets/project02_thumb.png'
import p0301 from '../assets/project03_thumb.png'
import p0401 from '../assets/project04_thumb.png'
import p0402 from '../assets/project04_img02.png'
import p0501 from '../assets/project05_thumb.png'

const api = [
  {
    id: "personality-test-app",
    img: [ p0101, p0102 ],
    github: "https://github.com/mbrhlk/personality",
    app: "https://mbrhlk.github.io/personality",
    title: "Personality Test App",
    description: {
      short: "This application is based on real psychology tests, the results can be easily use on videogames and mental health applications.",
      full: "On this application, I used context hooks and API for content managmement. For the UI I used React-charts library and CSS."
    }
  },
  {
    id: "person-app",
    img: [ p0201 ],
    github: "https://github.com/mbrhlk/person",
    app: "https://mbrhlk.github.io/person",
    title: "Character Generator",
    description: {
      short: "This app was made based on the personality test application, it uses an API to generate a persona",
      full: "On this application, I used context hooks and API for content managmement. For the UI I used rc-slider library and CSS."
    }
  },
  {
    id: "countdown-app",
    img: [ p0301 ],
    github: "https://github.com/mbrhlk/countdown",
    app: "https://mbrhlk.github.io/countdown",
    title: "Countdown App",
    description: {
      short: "This is a simple countdown application, which shows how many days, hours, minutes and seconds, between the actual date and a future date.",
      full: "This application was create using react components, state updating, props, and lifeCycle methods. For the UI I used React Bootstrap."
    }
  },
  {
    id: "diet-app",
    img: [ p0401, p0402 ],
    github: "https://github.com/consultor",
    app: "",
    title: "Diet app",
    description: {
      short: "This app was made to create a simple diet plan for people who wants to lose weight, or eat healthier.",
      full: "This app was made to create a simple diet plan for people who wants to lose weight, or eat healthier."
    }
  },
  {
    id: "todolist-app",
    img: [ p0501 ],
    github: "https://github.com/mbrhlk/todolist",
    app: "https://mbrhlk.github.io/todolist",
    title: "To-do List App",
    description: {
      short: "This is a very simple app that the user can add, remove or change daily tasks.",
      full: "This application was created using hooks, useEffect, useState and useRef."
    }
  },
]

export default api