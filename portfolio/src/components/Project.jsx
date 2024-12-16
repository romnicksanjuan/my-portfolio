import React from 'react'
import '../css/Project.css'
import image_to_text from '../image/project-images/image-to-text.jpg'
import quiz_image from '../image/project-images/quiz-image.jpg'

const Project = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding:'20px',gap:'10px' }}>

            <div style={{ alignItems: 'center', borderRadius: '10px', border: '2px solid #9BEC00', width: '50%' }}>
                <div className='project-image'>
                    <img style={{ width: '250px', height: '500px' }} src={image_to_text} alt="" />
                </div>

                <div className='project-container'>
                    <div className='project-inner-container'>
                        <h4 style={{ color: 'yellowgreen', marginBottom: '10px' }}>REACT NATIVE - ANDROID MOBILE APP</h4>
                        <h2 style={{ color: 'white', marginBottom: '10px' }}>IMAGE TO TEXT CONVERSION</h2>

                        <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
                            <button className='explore-button'>EXPLORE PROJECT</button>
                        </div>
                    </div>
                </div>

            </div>

            <div style={{ alignItems: 'center', borderRadius: '10px', border: '2px solid #9BEC00', width: '50%' }}>
                <div className='project-image'>
                    <img style={{ width: '250px', height: '500px' }} src={quiz_image} alt="" />
                </div>

                <div className='project-container'>
                    <div className='project-inner-container'>
                        <h4 style={{ color: 'yellowgreen', marginBottom: '10px' }}>REACT NATIVE - ANDROID MOBILE APP</h4>
                        <h2 style={{ color: 'white', marginBottom: '10px' }}>LEARN QUEST - QUIZ APP</h2>

                        <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
                            <button className='explore-button'>EXPLORE PROJECT</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>


    )
}

export default Project
