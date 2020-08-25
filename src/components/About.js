import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <nav>
                <Link to='/'> ← Back</Link>
            </nav>
            <article>
                <div>
                    <div>
                        <h1>Steve Park</h1>
                        <p>Full Stack Web Developer</p>
                        <div>
                            <p>
                                | Hello, My name is Steve, and I'm a Full-stack Web Developer proficient in HTML, CSS, JavaScript, and MEAN stacks.
                                | I became an immigrant family after finishing mandatory military service for South Korea. I'm consistently trying to take additional responsibilities and learn new things.
                                | Please take a moment to browse my work, skills, and professional experience. It’s my firm belief that a good challenge offers an opportunity to develop and improve, which is why I make a point of seeking out new ones in the professional realm as well as in my personal life. 
                                | Contact me directly to learn more. Thank you.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h6>Skills</h6>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Sass</li>
                            <li>JavaScript</li>
                            <li>JQuery</li>
                            <li>MongoDB</li>
                            <li>Express</li>
                            <li>Angular</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Python</li>
                            <li>Django</li>
                            <li>MySQL</li>
                            <li>SQLite</li>
                        </ul>
                        <h6>Contact Info</h6>
                        <ul>
                            <li>818-669-2730</li>
                            <li>stevepbong@gmail.com</li>
                        </ul>
                        <a href='https://www.linkedin.com/in/stevespark' target='blank'>LinkedIn</a>
                        <a href='https://github.com/Stevesbong' target='blank'>Github</a>
                    </div>
                </div>
            </article>
            <nav>
                <Link to='/'> ← Back</Link>
            </nav>
        </div>
    )
}

export default About
