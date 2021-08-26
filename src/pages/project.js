import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import projects from '../services/api'

import arrow from '../assets/arrow.svg'

import '../styles/project.css'

const Project = () => {
  const [ project, setProject ] = useState()
  const { projectId } = useParams()

  useEffect(() => {
    setProject(projects.find(p => p.id === projectId))
  }, [])

  if(!project) return null

  return (
    <div className="project">
      <h2>{project.title}</h2>
      <h3><a href={project.github} target="_blank" rel="noopener noreferrer">Github</a></h3>
      <div className="description">
        <p>{project.description.full}</p>
      </div>
      <ul>
        {project.img.map((img, i) => (
          <li key={i}>
            <img src={img} alt={project.title} />
          </li>
        ))}
      </ul>
      <a href={project.app} target="_blank" rel="noopener noreferrer" className="gotoapp no-deco">
        <span>App</span>
        <img src={arrow} alt="project" className="arrow small" />
      </a>
    </div>
  )
}

export default Project