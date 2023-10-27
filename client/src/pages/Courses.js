import React from 'react'

function Courses() {
    return (
        <div>
            <div className='courses-intro' style={{ backgroundImage: `url('./courses.svg')` }}>
                <div className='courses-intro-content'>
                    <h1>About Me</h1>

                    <div>
                        <p>
                            "I'm an adept programmer, skilled in communication and adaptable. Proficient in Frontend and Backend technologies, with MERN Stack expertise. Strong in Data Structures, Algorithms, and collaborative problem-solving. Committed to team success, effective in building social connections."
                        </p>

                        <button className='primary-button'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;