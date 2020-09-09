import React from 'react';
import { Link } from 'react-router-dom';
import { AwesomeButton, AwesomeButtonSocial } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

const About = () => {
    return (
        <div className='off-canvas-content'>
            <nav className='grid-container portfolio-breadcrumb'>
                <Link to='/'> ← Back</Link>
            </nav>
            <article className='grid-container portfolio-intro portfolio-project'>
                <div className='grid-x'>
                    <div className='cell small-6 medium-9 large-9'>
                        <h1>Steve Park</h1>
                        <p className='lead text-light'>Full Stack Web Developer</p>
                        <div className='portfolio-bio'>
                            <p>
                                Hello, My name is Steve, and I'm a Full-stack Web Developer proficient in HTML, CSS, JavaScript, and MEAN stacks.
                                I became an immigrant family after finishing mandatory military service for South Korea. I'm consistently trying to take additional responsibilities and learn new things.
                                Please take a moment to browse my work, skills, and professional experience. It’s my firm belief that a good challenge offers an opportunity to develop and improve, which is why I make a point of seeking out new ones in the professional realm as well as in my personal life. 
                                Contact me directly to learn more. Thank you.
                            </p>
                        </div>
                    </div>
                    <div className='cell portfolio-meta small-6 medium-2 large-3'>
                        <h6>Skills</h6>
                        <ul>
                            <AwesomeButton
                                type="secondary"
                                style={ { margin:"2px" } }
                                >
                                HTML
                            </AwesomeButton>
                            <AwesomeButton
                                type="secondary"
                                style={ { margin:"2px" } }
                                >
                                CSS
                            </AwesomeButton>
                            <AwesomeButton
                                type="secondary"
                                style={ { margin:"2px" } }
                                >
                                SASS
                            </AwesomeButton>
                            <AwesomeButton
                                type="secondary"
                                style={ { margin:"2px" } }
                                >
                                JavaScript
                            </AwesomeButton>
                            <AwesomeButton
                                type="secondary"
                                style={ { margin:"2px" } }
                                >
                                JQuery
                            </AwesomeButton>
                            <AwesomeButton
                                type="secondary"
                                style={ { margin:"2px" } }
                                >
                                MongoDB
                            </AwesomeButton>
                            <AwesomeButton
                                type="secondary"
                                style={ { margin:"2px" } }
                                >
                                Express
                            </AwesomeButton>
                            <AwesomeButton
                                type="secondary"
                                style={ { margin:"2px" } }
                                >
                                Angular
                            </AwesomeButton>
                            <AwesomeButton
                                type="secondary"
                                style={ { margin:"2px" } }
                                >
                                React
                            </AwesomeButton>
                            <AwesomeButton
                                type="secondary"
                                style={ { margin:"2px" } }
                                >
                                Node.js
                            </AwesomeButton>
                            <AwesomeButton
                                type="secondary"
                                style={ { margin:"2px" } }
                                >
                                Python
                            </AwesomeButton>
                            <AwesomeButton
                                type="secondary"
                                style={ { margin:"2px" } }
                                >
                                Django
                            </AwesomeButton>
                            <AwesomeButton
                                type="secondary"
                                style={ { margin:"2px" } }
                                >
                                MySQL
                            </AwesomeButton>
                            <AwesomeButton
                                type="secondary"
                                style={ { margin:"2px" } }
                                >
                                SQLite
                            </AwesomeButton>
                        </ul>
                        <h6>Contact Info</h6>
                        <ul>
                            <li>818-669-2730</li>
                            <li>stevepbong@gmail.com</li>
                        </ul>
                        <AwesomeButtonSocial
                            type="linkedin"
                            size="large"
                            href="https://www.linkedin.com/in/stevespark"
                            target="_blank"
                            style={ { width:"100%", marginBottom:"5px" } }
                            >
                            LinkedIn
                        </AwesomeButtonSocial>
                        <AwesomeButtonSocial
                            type="github"
                            size="large"
                            href="https://github.com/Stevesbong"
                            target="_blank"
                            style={ { width:"100%", marginBottom:"5px" } }
                            >
                            Github
                        </AwesomeButtonSocial>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default About;