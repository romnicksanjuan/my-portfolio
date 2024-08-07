import React from 'react'
import '../css/Project.css'
import image_to_text from '../image/project-images/image-to-text.jpg'
import quiz_image from '../image/project-images/quiz-image.jpg'

const Project = () => {
    return (
        <div>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center',backgroundColor:'#2c2929', borderRadius:'5px',marginBottom:'20px' }}>
                <div className='project-image'>
                    <img style={{ width: '250px', height: '500px' }} src={image_to_text} alt="" />
                </div>

                <div className='project-container'>
                    <div className='project-inner-container'>
                        <h4 style={{ color: 'yellowgreen', marginBottom: '10px' }}>REACT NATIVE - ANDROID MOBILE APP</h4>
                        <h2 style={{ color: 'white', marginBottom: '10px' }}>IMAGE TO TEXT CONVERSION</h2>

                        <p style={{ marginBottom: '10px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa dolores mollitia,
                            iste corporis asperiores quidem quam cumque cum,
                            impedit facilis architecto rerum molestias eos ducimus voluptate nihil numquam laudantium.</p>

                        <button className='explore-button'>EXPLORE PROJECT</button>
                    </div>
                </div>

            </div>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor:'#2c2929', borderRadius:'5px' }}>
                <div className='project-image'>
                    <img style={{ width: '250px', height: '500px' }} src={quiz_image} alt="" />
                </div>

                <div className='project-container'>
                    <div className='project-inner-container'>
                        <h4 style={{ color: 'yellowgreen', marginBottom: '10px' }}>REACT NATIVE - ANDROID MOBILE APP</h4>
                        <h2 style={{ color: 'white', marginBottom: '10px' }}>LEARN QUEST - QUIZ APP</h2>

                        <p style={{ marginBottom: '10px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa dolores mollitia,
                            iste corporis asperiores quidem quam cumque cum,
                            impedit facilis architecto rerum molestias eos ducimus voluptate nihil numquam laudantium.</p>

                        <button className='explore-button'>EXPLORE PROJECT</button>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Project
