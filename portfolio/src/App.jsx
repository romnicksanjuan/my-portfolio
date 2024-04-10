import { useRef } from 'react';
import './App.css'

import Typewriter from 'typewriter-effect'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

import me from './image/me.jpg'


import About from './components/About';
import Contact from './components/Contact';
function App() {

  const home = useRef(null);
  const aboutPage = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);

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
            <a href="#home" onClick={() => scrollToElement(home)}>Home</a>
            <a href="#about" onClick={() => scrollToElement(aboutPage)}>About</a>
            <a href="#project" onClick={() => scrollToElement(project)}>Project</a>
            <a href="#contact" onClick={() => scrollToElement(contact)}>Contact</a>
          </nav>
        </header>

        <section ref={home}>
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
            <img className='image' src={me} alt="" />
          </div>
        </section>
        <section ref={aboutPage}>
          <About />

        </section>
        <section ref={project}>
          <h2>Project Section</h2>
        </section>
        <section ref={contact}>
          <Contact />
        </section>
      </div>
    </>
  )
}

export default App
