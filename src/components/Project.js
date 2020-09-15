import React from 'react';
import { motion } from 'framer-motion';

const imgVariants = {
    initial: {
        scale: 1
    },
    frame: {
        scale: [ 0.8, 1.4, 1 ],
        rotate: [ 0, 45, -45, 0 ],
        transition: {
            duration: 0.3
        }
    }
}

const Project = ({ project }) => {
    return (
        <div className='cell'>
            <a href={ `project/${ project.id }` }>
                <motion.img className='thumbnail' src={ project.image_thumbnail_urls } alt=''
                    initial="initial"
                    whileHover="frame"
                    variants={imgVariants}
                />
                <h5 style={ { zIndex: 1000, position: "relative" } }>{ project.project_name }</h5>
            </a>
        </div>
    )
}

export default Project;
