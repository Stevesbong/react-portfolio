import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../Data.json';
import { AwesomeButton, AwesomeButtonSocial } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

const ProjectDetail = ({ match }) => {

    const { id } = match.params;
    const [ {   project_name, 
                description, 
                technologies, 
                live_link, 
                github_link, 
                image_urls  } ] = Data.projects.filter( element => element.id === parseInt(id));

    const linkButtonType = live_link.includes('youtu.be') 
                        ? ( <AwesomeButtonSocial
                            
                            type="youtube"
                            size="large"
                            href={live_link}
                            target="_blank"
                            style={{ width:"100%", marginBottom:"5px" }}
                            >
                            Video
                        </AwesomeButtonSocial>)
                        : (<AwesomeButton
                            type="primary"
                            href={live_link}
                            target="_blank"
                            style={{ width:"100%", marginBottom:"5px" }}
                            >
                            Live Demo
                        </AwesomeButton>);
    return (
        <div className='off-canvas-content'>
            <nav className='grid-container portfolio-breadcrumb'>
                <Link to='/'> ← Back</Link>
            </nav>
            <article className='grid-container portfolio-intro portfolio-project'>
                <div className='grid-x'>
                    <div className='cell small-6 medium-9 large-9'>
                        <h1>{ project_name }</h1>
                        <p className='lead text-light'>{ description }</p>
                    </div>
                    <div className='cell portfolio-meta small-6 medium-2 large-3'>
                        <h6>Technologies</h6>
                        <ul>
                            { technologies.map( ( tech, index ) => (
                                <li key={ index }>{ tech }</li>
                            )) }
                        </ul>
                        { linkButtonType }
                        <AwesomeButtonSocial
                            type="github"
                            size="large"
                            href={github_link}
                            target="_blank"
                            style={{width:"100%", marginBottom:"5px"}}
                            >
                            Github
                        </AwesomeButtonSocial>
                    </div>
                </div>
                { image_urls.map( ( img, index ) => (
                    <img className='image' 
                        key={ index } 
                        src={ img } 
                        style={ { width: "1200px", height: "550px" } } 
                        alt={ project_name } 
                    />
                ))}
            </article>
        </div>
    )
}

export default ProjectDetail;