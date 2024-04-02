import React from 'react'
import '../css/About.css'
import uwu from '../image/uwu.jpg'


import css from '../image/css.png'
import js from '../image/js.png'
import html from '../image/html.png'
import react from '../image/react.png'
import nodejs from '../image/nodejs.png'
import git from '../image/git.webp'
import github from '../image/github.png'

const About = () => {
    return (
        <>
            <div className='about-main'>
                <div className='sub-main'>
                <div className='about-image'>
                    <img style={{height:'300px', width:'300px',borderRadius: '50%'}} src={uwu} alt="" />
                </div>
                <div className='aboutme'>
                    <h2 className='about-me'>About Me</h2>
                    <p>Welcome to my portfolio! I'm Romnick San Juan,
                        a passionate and dedicated web developer and software engineer with a solid understanding in languages
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


                <div className='tech-stack'>
                    <div className='skills'>
                        <h3>Tech Stack</h3>
                        <img style={{
                            height: '50px',
                            width: '50px',
                            padding: '5px',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            margin: '5px 10px'
                        }} src={html} alt="" />
                        <img style={{
                            height: '50px',
                            width: '50px',
                            padding: '5px',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            margin: '5px 10px'
                        }} src={css} alt="" />
                        <img style={{
                            height: '50px',
                            width: '50px',
                            padding: '5px',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            margin: '5px 10px'
                        }} src={js} alt="" />
                    </div>

                    <div className='skills'>
                        <h3>Framework</h3>
                        <img style={{
                            height: '50px',
                            width: '50px',
                            padding: '5px',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            margin: '5px 10px'
                        }} src={react} alt="" />
                        <img style={{
                            height: '50px',
                            width: '50px',
                            padding: '5px',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            margin: '5px 10px'
                        }} src={nodejs} alt="" />
                    </div>

                    <div className='skills'>
                        <h3>Tools</h3>
                        <img style={{
                            height: '50px',
                            width: '50px',
                            padding: '5px',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            margin: '5px 10px'
                        }} src={git} alt="" />
                        <img style={{
                            height: '50px',
                            width: '50px',
                            padding: '5px',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            margin: '5px 10px'
                        }} src={github} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
