import React from 'react'
import '../css/Project.css'
import image_to_text from '../image/project-images/image-to-text.jpg'
import quiz_image from '../image/project-images/quiz-image.jpg'
import ImgToTextExplore from './ImgToTextExplore'
import { useNavigate } from 'react-router-dom'

const Project = () => {


    return (
        <div className='project-main'>

            <div className='sub-container'>
                <div className='project-image'>
                    <img style={{ width: '250px', height: '500px' }} src={image_to_text} alt="" />
                </div>

                <div className='project-container'>
                    <div className='project-inner-container'>
                        <h4 style={{ color: 'yellowgreen', marginBottom: '10px',textAlign:'center', fontSize:'14px' }}>REACT NATIVE - ANDROID MOBILE APP</h4>
                        <h2 style={{ color: 'white', marginBottom: '10px',textAlign:'center' ,fontSize:'15px' }}>IMAGE TO TEXT CONVERSION</h2>

                        <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
                            <button onClick={() => window.open('/image-to-text-explore', '_blank')} className='explore-button'>EXPLORE PROJECT</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className='sub-container'>
                <div className='project-image'>
                    <img style={{ width: '250px', height: '500px' }} src={quiz_image} alt="" />
                </div>

                <div className='project-container'>
                    <div className='project-inner-container'>
                        <h4 style={{ color: 'yellowgreen', marginBottom: '10px',textAlign:'center',fontSize:'14px' }}>REACT NATIVE - ANDROID MOBILE APP</h4>
                        <h2 style={{ color: 'white', marginBottom: '10px',textAlign:'center',fontSize:'15px' }}>LEARN QUEST - QUIZ APP</h2>

                        <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
                            <button onClick={() => window.open('/quiz-app-explore','_blank')} className='explore-button'>EXPLORE PROJECT</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>


    )
}

export default Project
