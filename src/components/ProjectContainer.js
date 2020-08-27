import React, { Component } from 'react';
import Data from '../Data.json';
import Project from './Project';

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

    componentWillMount() {
        document.addEventListener('click', this.handleClick)
    }
    
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick)
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
            <div className={ 'off-canvas-content' + this.openHeader() } data-off-canvas-content='' ref={node => this.node = node}>
                <div className='title-bar hide-for-large'>
                    <div className='title-bar-left'>
                        <button className='menu-icon' type='button' onClick={ this.toggleMenu }></button>
                        <span className='title-bar-title'>Steve Park</span>
                    </div>
                </div>
                <article className='grid-container portfolio-intro'>
                    <div>
                        <h1 className='index-heading'>Hello, Welcome to my portfolio!</h1>
                        <p className='leading text-light'>
                            This is my personal projects showcase. 
                            I am seeking to use my skills to create and build up products that will impact the world. I am interested in both front-end and back-end development. 
                            I am a naturally creative problem-solver that will work to figure out a solution.
                        </p>
                    </div>
                </article>
                <article className='grid-container portfolio-index'>
                    <div className='grid-x grid-margin-x small-up-2 medium-up-2 large-up-3'>
                        { data.projects.map( ( project, index ) => 
                            <Project project={project} key={index} />
                        ) }
                    </div>
                </article>
            </div>
        )
    }
}