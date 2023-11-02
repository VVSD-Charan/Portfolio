import React from 'react'
import {FaInstagram,FaLinkedin,FaTwitter,FaMailBulk,FaGithub} from 'react-icons/fa'

function Footer(){
    return (
        <div>
            <div className='footer'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#001220" fill-opacity="1" d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

                <div className='row footer-content justify-content-center'>
                    <div className='col-md-6'>
                        <div className='div'>
                            <p>My Handle Links</p>
                            <hr/>

                            <div className='d-flex justify-content-between'>
                                <FaInstagram className='footer-icons'/>
                                <FaLinkedin className='footer-icons'/>
                                <FaTwitter className='footer-icons'/>
                                <FaMailBulk className='footer-icons'/>
                                <FaGithub className='footer-icons'/>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer