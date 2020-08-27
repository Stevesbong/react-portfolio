import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../aaa.jpg';

const Header = ({toggle}) => {
    
        const show = ( toggle ) ? ' is-transition-push is-closed' : ' is-transition-push is-open'
        const visibility = ( toggle ) ? '' : ' is-visible is-closable'
        return (
            <>
                <div className={ 'off-canvas position-left reveal-for-large portfolio-me' + show } id='my-info' data-off-canvas='sfpqnt-off-canvas' aria-hidden={toggle}>
                    <div className='grid-y grid-padding-x' style={{ height:'100%' }}>
                        <br />
                        <div className='cell shrink'>
                            <img className='thumbnail' src={ logo } alt='' />
                        </div>
                        <div className='cell auto'>
                            <h5>Steve Park</h5>
                            <p className='text-light'>
                                I am a Full-Stack Developer with a tremendous amount of energy and love to be a challenge to grow my technical skills.
                                I learned to build web applications from scratch with an emphasis on front-end development to use skills including HTML, CSS, and Angular and back-end development experience to 
                                use different types of databases, including SQL (MySQL, SQLLite) and NoSQL (MongoDB). 
                            </p>
                            <Link to='/about'>Learn More →</Link>
                        </div>
                    </div>
                </div>
                <div className={ 'js-off-canvas-overlay is-overlay-fixed' + visibility }></div>
            </>
        )
}

export default Header;