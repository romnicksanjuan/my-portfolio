import React from 'react'
import '../css/Project.css'
import '../css/mobile/mobile-size-project.css'
import image_to_text from '../image/project-images/image-to-text.jpg'
import quiz_image from '../image/project-images/quiz-image.jpg'

// web images
import pos_image from '../image/web-images/pos-image.png'
import ImgToTextExplore from './ImgToTextExplore'
import { useNavigate } from 'react-router-dom'

const Project = () => {


    return (
        <div>
            <div className='project-main'>

                <div>
                    <h3 style={{ color: 'white', textAlign: 'center', margin: '35px 0 10px 0' }}>MOBILE PROJECTS</h3>

                    <div className='project-sub-main' >
                        <div className='sub-container'>
                            <div className='project-image'>
                                <img className='mobile-image' src={image_to_text} alt="" />
                            </div>

                            <div className='project-container'>
                                <div className='project-inner-container'>
                                    <h4 style={{ color: 'yellowgreen', marginBottom: '10px', textAlign: 'center', fontSize: '14px' }}>REACT NATIVE - ANDROID MOBILE APP</h4>
                                    <h2 style={{ color: 'white', marginBottom: '10px', textAlign: 'center', fontSize: '15px' }}>IMAGE TO TEXT CONVERSION</h2>

                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <button onClick={() => window.open('/image-to-text-explore', '_blank')} className='explore-button'>EXPLORE PROJECT</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='sub-container'>
                            <div className='project-image'>
                                <img className='mobile-image' src={quiz_image} alt="" />
                            </div>

                            <div className='project-container'>
                                <div className='project-inner-container'>
                                    <h4 style={{ color: 'yellowgreen', marginBottom: '10px', textAlign: 'center', fontSize: '14px' }}>REACT NATIVE - ANDROID MOBILE APP</h4>
                                    <h2 style={{ color: 'white', marginBottom: '10px', textAlign: 'center', fontSize: '15px' }}>LEARN QUEST - QUIZ APP</h2>

                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <button onClick={() => window.open('/quiz-app-explore', '_blank')} className='explore-button'>EXPLORE PROJECT</button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <div className='project-main'>
                <div>
                    <h3 style={{ color: 'white', textAlign: 'center', margin: '35px 0 10px 0' }}>WEB PROJECTS</h3>
                    <div className='web-container'>
                        <div className='project-image'>
                            <img className='web-image' src={pos_image} alt="" />
                        </div>

                        <div className='project-container'>
                            <div className='project-inner-container'>
                                <h4 style={{ color: 'yellowgreen', marginBottom: '10px', textAlign: 'center', fontSize: '14px' }}>REACT WEBSITE</h4>
                                <h2 style={{ color: 'white', marginBottom: '10px', textAlign: 'center', fontSize: '15px' }}>POINT OF SALE</h2>

                                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <button onClick={() => window.open('/', '_blank')} className='explore-button'>EXPLORE PROJECT</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>



        </div>


    )
}

export default Project
