import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Data from '../Data.json';

export default class ProjectDetail extends Component {

    state = {
        projects: Data,
    }

    render() {
        const { id } = this.props.match.params;
        const { projects } = this.state;
        const project = projects.projects.filter( element => element.id === parseInt(id))[0]
        console.log(project)
        return (
            <div className='off-canvas-content'>
                <nav className='grid-container portfolio-breadcrumb'>
                    <Link to='/'> ← Back</Link>
                </nav>
                <article className='grid-container portfolio-intro portfolio-project'>
                    <div className='grid-x'>
                        <div className='cell small-6 medium-9 large-9'>
                            <h1>{ project.project_name }</h1>
                            <p className='lead text-light'>{ project.description }</p>
                        </div>
                        <div className='cell portfolio-meta small-6 medium-2 large-3'>
                            <h6>Technologies</h6>
                            <ul>
                                { project.technologies.map( ( tech, index ) => (
                                    <li key={ index }>{ tech }</li>
                                )) }
                            </ul>

                            { project.live_link.includes('youtu.be') ? 
                                ( <a className='button expanded' href={project.live_link} target='blank'>Video</a> ) 
                                : ( <a className='button expanded' href={project.live_link} target='blank'>Live Demo</a> ) }

                            <a className='button expanded' href={project.github_link} target='blank'>Github</a>
                        </div>
                    </div>
                    { project.image_urls.map( ( img, index ) => (
                        <img className='image' key={ index } src={ img } style={ { width: "1200px", height: "550px" } } alt={ project.project_name } />
                    ))}
                </article>
            </div>
        )
    }
}
