import { useRef } from 'react';
import './App.css'

import Typewriter from 'typewriter-effect'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

import image from './image/uwu.jpg'
import css from './image/css.png'
import js from './image/js.png'
import html from './image/html.png'
import react from './image/react.png'
import nodejs from './image/nodejs.png'
import git from './image/git.webp'
import github from './image/github.png'
function App() {

  const Home = useRef(null);
  const About = useRef(null);
  const Project = useRef(null);
  const Contact = useRef(null);

  const scrollToElement = (element) => {
    element.current.scrollIntoView({
      behavior: 'smooth'
    })
  };


  // const texts = ['Programmer', 'Web Developer']
  const texts = ['Programmer', 'Web Developer'];

  return (
    <>
      <div>
        <header>
          <a href="#logo" className='logo'>logo</a>
          <nav>
            <a href="#home" onClick={() => scrollToElement(Home)}>Home</a>
            <a href="#about" onClick={() => scrollToElement(About)}>About</a>
            <a href="#project" onClick={() => scrollToElement(Project)}>Project</a>
            <a href="#contact" onClick={() => scrollToElement(Contact)}>Contact</a>
          </nav>
        </header>

        <section ref={Home}>
          <div className="name">
            <h2 className='intro'>Hi, im Romnick San Juan</h2>
            <h1 className='texts'>
              <Typewriter
                options={{
                  strings: texts,
                  autoStart: true,
                  loop: true,
                  delay: 75
                }}
              />
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className='icons'>
              <a href="https://web.facebook.com/romnick.sanjuan.3"><FaFacebook size={30} style={{
                color: 'white',
                margin: '0 5px'
              }} /></a>

              <FaInstagram size={30} style={{
                color: 'white',
                margin: '0 5px'
              }} />
            </div>

          </div>
          <div className="image-container">
            <img className='image' src={image} alt="" />
          </div>
        </section>
        <section ref={About}>
          <div className='about-image'>

          </div>
          <div className='aboutme'>
            <h2 className='about-me'>About Me</h2>
            <p>Welcome to my portfolio! I'm Romnick San Juan,
              a passionate and dedicated web developer and software engineer with a solid understanding in languages
              like HTML, CSS, JavaScript, and proficiency in frameworks such as React and Node.js,
              i am confident that i can be a valuable asset to any web development team. </p>

            <h2 className='what-i-do'>What i do</h2>
            <p>
              What I Do
              I specialize in crafting responsive and user-friendly websites and applications that not
              only look great but also perform exceptionally well. Whether it's building sleek user interfaces,
              optimizing database performance, or troubleshooting complex bugs,
              I approach every project with enthusiasm and a keen eye for detail.
            </p>
          
          <div className='skills'>
          <h3>Tech Stack</h3>
          <img style={{
            height:'50px',
            width:'50px',
            padding:'5px',
            backgroundColor:'white',
            borderRadius:'50%',
            margin:'5px 10px'
          }} src={html} alt="" />
          <img style={{
            height:'50px',
            width:'50px',
            padding:'5px',
            backgroundColor:'white',
            borderRadius:'50%',
            margin:'5px 10px'
          }} src={css} alt="" />
          <img style={{
            height:'50px',
            width:'50px',
            padding:'5px',
            backgroundColor:'white',
            borderRadius:'50%',
            margin:'5px 10px'
          }} src={js} alt="" />
          </div>

          <div className='skills'>
          <h3>Framework</h3>
          <img style={{
            height:'50px',
            width:'50px',
            padding:'5px',
            backgroundColor:'white',
            borderRadius:'50%',
            margin:'5px 10px'
          }} src={react} alt="" />
          <img style={{
            height:'50px',
            width:'50px',
            padding:'5px',
            backgroundColor:'white',
            borderRadius:'50%',
            margin:'5px 10px'
          }} src={nodejs} alt="" />
          </div>

          <div className='skills'>
          <h3>Tools</h3>
          <img style={{
            height:'50px',
            width:'50px',
            padding:'5px',
            backgroundColor:'white',
            borderRadius:'50%',
            margin:'5px 10px'
          }} src={git} alt="" />
          <img style={{
            height:'50px',
            width:'50px',
            padding:'5px',
            backgroundColor:'white',
            borderRadius:'50%',
            margin:'5px 10px'
          }} src={github} alt="" />
          </div>
            
          </div>
        </section>
        <section ref={Project}>
          <h2>Project Section</h2>
        </section>
        <section ref={Contact}>
          <h2>Contact Section</h2>
        </section>
      </div>
    </>
  )
}

export default App
