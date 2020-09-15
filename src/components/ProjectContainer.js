import React, { Component } from 'react';
import Data from '../Data.json';
import Project from './Project';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: 1.5 }
    },
    exit: {
        x: '-100vw',
        transition: { duration: 1.5, ease: 'easeInOut' }
    }
}
const titleVariants = {
    hidden: {
        x: '100vw'
    },
    visible: {
        x: 0,
        transition: { delay: 0.2, type: 'spring', stiffness: 110 }
    }
}

export default class ProjectContainer extends Component {

    state = {
        data: Data
    }

    toggleMenu = () => {
        const { toggle } = this.props;
        toggle(false)
    }

    openHeader = () => {
        const { left } = this.props;
        const header = (left) ? '' : ' is-open-left has-transition-push has-position-left'
        return header
    }

    UNSAFE_componentWillMount() {
        document.addEventListener('click', this.handleClick)
    }

    handleClick = e => {
        if(e.target.classList.contains('is-visible')) {
            const { toggle } = this.props;
            toggle(true)
        }
        
    }

    render() {
        const { data } = this.state;
        return (
            <AnimatePresence exitBeforeEnter>
                <motion.div className={ 'off-canvas-content' + this.openHeader() } data-off-canvas-content='' ref={ node => this.node = node }
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className='title-bar hide-for-large'>
                        <div className='title-bar-left'>
                            <button className='menu-icon' type='button' onClick={ this.toggleMenu }></button>
                            <span className='title-bar-title'>Steve Park</span>
                        </div>
                    </div>
                    <article className='grid-container portfolio-intro'>
                        <div>
                            <motion.h1 className='index-heading'
                                variants={titleVariants}

                            >Hello, Welcome to my portfolio!</motion.h1>
                            <p className='lead text-light'>
                                This is my personal projects showcase. 
                                I am seeking to use my skills to create and build up products that will impact the world. I am interested in both front-end and back-end development. 
                                I am a naturally creative problem-solver that will work to figure out a solution.
                            </p>
                        </div>
                    </article>
                    <article className='grid-container portfolio-index'>
                        <div className='grid-x grid-margin-x small-up-2 medium-up-2 large-up-3'>
                            { data.projects.map( ( project, index ) => 
                                <Project project={ project } key={ index } />
                            ) }
                        </div>
                    </article>
                </motion.div>
            </AnimatePresence>
        )
    }
}