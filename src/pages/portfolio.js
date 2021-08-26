import React from 'react'
import { Switch, Route, Link, useRouteMatch, useHistory } from 'react-router-dom'

import Project from './project'

import projects from '../services/api'
import arrow from '../assets/arrow.svg'

import '../styles/portfolio.css'

const Default = () => {
  const history = useHistory()

  return (
    <>
      <div className="portfolio">
        <header>
          <h1>Frontend</h1>
          <main>
            <h2>Portfolio</h2>
          </main>
        </header>
        <footer>
          <Link to="/fe-portfolio"><img src={arrow} alt="arrow" className="arrow down" /></Link>
        </footer>
      </div>
      <ul className="items">
        {projects.map((project, i) => {
          const goToProject = () => history.push(`/fe-portfolio/${project.id}`)
  
          return (
            <li key={i} onClick={goToProject}>
              <img src={project.img[0]} alt={project.title} />
              <aside>
                <h3>{project.title}</h3>
                <p>{project.description.short}</p>
                <img src={arrow} alt="arrow" className="arrow small" />
              </aside>
            </li>
          )
        })}
      </ul>
    </>
  )
}

const Portfolio = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Default />
      </Route>
      <Route path={`${path}/:projectId`}>
        <Project />
      </Route>
    </Switch>
  )
}

export default Portfolio