import React from 'react'
import {FaInstagram,FaLinkedin,FaTwitter,FaMailBulk,FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Footer(){
    return (
        <div>
            <div className='footer'>
            <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#001220" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,250.7C384,267,480,245,576,213.3C672,181,768,139,864,144C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

                <div className='row footer-content justify-content-center'>
                    <div className='col-md-6'>
                        <div className='div'>
                            <p>My Handle Links</p>
                            <hr/>

                            <div className='d-flex justify-content-between px-2'>
                                <a href='https://www.instagram.com/vvs.dc/' target='_blank'><FaInstagram className='footer-icons'/></a>
                                <a href='https://www.linkedin.com/in/vvsd-charan-0938b81bb/' target='_blank'><FaLinkedin className='footer-icons'/></a>
                                <a href='https://twitter.com/VVSD_Charan' target='_blank'><FaTwitter className='footer-icons'/></a>
                                <a href='mailto:vvsdcharan2001@gmail.com' target='_blank'><FaMailBulk className='footer-icons'/></a>
                                <a href='https://github.com/VVSD-Charan' target='_blank'><FaGithub className='footer-icons'/></a>
                            </div>
                            <hr/>

                            <br/>
                            <p>
                               &copy; VVSD Charan 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer