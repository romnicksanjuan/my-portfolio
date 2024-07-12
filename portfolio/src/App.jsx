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
  const texts = ['Programmer', 'Web Developer', 'Mobile Developer'];

  return (
    <>
      <div>
        <header>
          <a href="#logo" className='logo'>Nick.dev</a>
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
              I am a passionate web and mobile developer with over 1 year of
              experience in building scalable applications. I specialize in React
              Native and Expo for mobile development
              and have a strong background in full-stack web
              development using React and Node.js.
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
