import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../Data.json';
import { motion } from 'framer-motion';
import { AwesomeButton, AwesomeButtonSocial } from "react-awesome-button";
import "react-awesome-button/src/styles/styles.scss";


// framer motion Variants for container div
const containerVariants = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: .5, ease: 'easeInOut' }
    }
}

// framer motion Variants for tech button
const techVariants = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 50, delay: 1, duration: .5, ease: 'easeInOut', staggerChildren: 0.5 }
    }
}

const ProjectDetail = ({ match }) => {

    const { id } = match.params;

    // get one project
    const [ {   project_name, 
                description, 
                technologies, 
                live_link, 
                github_link, 
                image_urls  } ] = Data.projects.filter( element => element.id === parseInt(id));
    
    // use ternary operator loop through images in the array and display it. If there's no images in the array display No Images P Tag.
    const projectImages = image_urls.length ? ( image_urls.map( ( img, index ) => (
        <img className='image' 
            key={ index } 
            src={ img } 
            style={ { width: "1200px", height: "550px" } } 
            alt={ project_name } 
        />
    )) ) : ( <p className='lead text-center'>No Images.</p> )

    // use ternary operator to display button either youtube video or live demo.
    const linkButtonType = live_link.includes('youtu.be') 
                        ? ( <AwesomeButtonSocial
                            
                            type="youtube"
                            size="large"
                            href={ live_link }
                            target="_blank"
                            style={ { width:"100%", marginBottom:"5px" } }
                            >
                            Video
                        </AwesomeButtonSocial>)
                        : (<AwesomeButton
                            type="primary"
                            href={ live_link }
                            target="_blank"
                            style={ { width:"100%", marginBottom:"5px" } }
                            >
                            Live Demo
                        </AwesomeButton>);
    return (
        <motion.div className='off-canvas-content'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
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
                        <motion.ul className="project-skills"
                            variants={techVariants}
                        >
                            { technologies.map( ( tech, index ) => (
                                <motion.div 
                                    key={ index }
                                    whileHover={{ 
                                        scale: 1.02,
                                        textShadow: '0px 0px 8px rgb(0, 0, 0)',
                                        rotate: [ 0, 5, -5, 0 ],
                                        transition: {
                                            duration: 0.3
                                        }
                                    }}
                                >
                                    <AwesomeButton
                                        type="secondary"
                                        style={ { width:'100%', margin:"2px" } }
                                        >
                                        { tech }
                                    </AwesomeButton>
                                </motion.div>
                            )) }
                        </motion.ul>
                        { linkButtonType }
                        <AwesomeButtonSocial
                            type="github"
                            size="large"
                            href={ github_link }
                            target="_blank"
                            style={ { width:"100%", marginBottom:"5px" } }
                            >
                            Github
                        </AwesomeButtonSocial>
                    </div>
                </div>
                { projectImages }
                <nav className='grid-container portfolio-breadcrumb'>
                    <Link to='/'> ← Back</Link>
                </nav>
            </article>
        </motion.div>
    )
}

export default ProjectDetail;