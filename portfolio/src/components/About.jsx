import React from 'react'
import '../css/About.css'
import me from '../image/me.jpg'

//tech stack
import css from '../image/css.png'
import js from '../image/js.png'
import html from '../image/html.png'
import react from '../image/react.png'
import nodejs from '../image/nodejs.png'


//tool
import vscode from '../image/vscode.png'
import vercel from '../image/vercel.avif'
import git from '../image/git.webp'
import github from '../image/github.png'
const About = () => {
    return (
        <>
            <div className='about-main'>
                <div className='sub-main'>
                    <div className='about-image'>
                        <img style={{ height: 'auto', width: '80%', borderRadius: '50%' }} src={me} alt="" />
                    </div>
                    <div className='aboutme'>
                        <h2 className='about-me'>About Me</h2>
                        <p>Welcome to my portfolio! I'm Romnick San Juan,
                            a passionate and dedicated web and mobile developer with a solid understanding in languages
                            like HTML, CSS, JavaScript, and proficiency in frameworks such as React and Node.js,
                            i am confident that i can be a valuable asset to any web development team. </p>

                        <h2 className='what-i-do'>What i do</h2>
                        <p>
                            I specialize in crafting responsive and user-friendly websites and applications that not
                            only look great but also perform exceptionally well. Whether it's building sleek user interfaces,
                            optimizing database performance, or troubleshooting complex bugs,
                            I approach every project with enthusiasm and a keen eye for detail.
                        </p>


                    </div>
                </div>

                <div className='skill-main'>
                    <h2 className='skill'>SKILLS</h2>
                    <h3 className='tech-tools'>Tech Stack</h3>
                    <div className='grid-container'>
                        <div className='tech-stack'>
                            <div className='images'>
                                <li>
                                    <img style={{
                                        height: '30px',
                                        width: '30px',
                                        margin: '5px 10px'
                                    }} src={html} alt="" />
                                    <h4>HTML</h4>
                                </li>
                            </div>

                            <div className='images'>
                                <li>
                                    <img style={{
                                        height: '30px',
                                        width: '30px',
                                        margin: '5px 10px'
                                    }} src={css} alt="" />
                                    <h4>CSS</h4>
                                </li>
                            </div>

                            <div className='images'>
                                <li>
                                    <img style={{
                                        height: '30px',
                                        width: '40px',
                                        margin: '5px 10px'
                                    }} src={js} alt="" />
                                    <h4>JavaScript</h4>
                                </li>
                            </div>

                            <div className='images'>
                                <li>
                                    <img style={{
                                        height: '30px',
                                        width: '33px',
                                        margin: '5px 10px'
                                    }} src={react} alt="" />
                                    <h4>ReactJS</h4>
                                </li>
                            </div>

                            <div className='images'>
                                <li>
                                    <img style={{
                                        height: '30px',
                                        width: '27px',
                                        margin: '5px 10px'
                                    }} src={nodejs} alt="" />
                                    <h4>Node js</h4>
                                </li>
                            </div>
                        </div>
                    </div>


                    <h3 className='tech-tools'>Tools</h3>
                    <div className='grid-container'>
                        <div className='tech-stack'><div className='images'>
                                <li>
                                    <img style={{
                                        height: '30px',
                                        width: '30px',
                                        margin: '5px 10px'
                                    }} src={github} alt="" />
                                    <h4>Git Hub</h4>
                                </li>
                            </div>

                            <div className='images'>
                                <li>
                                    <img style={{
                                        height: '30px',
                                        width: '30px',
                                        margin: '5px 10px'
                                    }} src={git} alt="" />
                                    <h4>Git</h4>
                                </li>
                            </div>

                            <div className='images'>
                                <li>
                                    <img style={{
                                        height: '30px',
                                        width: '30px',
                                        margin: '5px 10px'
                                    }} src={vercel} alt="" />
                                    <h4>Vercel</h4>
                                </li>
                            </div>

                            <div className='images'>
                                <li>
                                    <img style={{
                                        height: '30px',
                                        width: '30px',
                                        margin: '5px 10px'
                                    }} src={vscode} alt="" />
                                    <h4>Vscode</h4>
                                </li>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default About
