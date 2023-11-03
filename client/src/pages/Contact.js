import React from 'react'
import Header from '../components/Header';

function Contact() {
    return (
        <div>
            <Header />
            <div className='container contact mt-5'>
                <div className='row pt-5'>
                    <div className='col-md-6 p-5'>
                        <img src='./contactme.svg' alt='contact-us' />
                    </div>

                    <div className='col-md-6'>
                        <form className='contact-form m-2 p-5 n-box2' action='mailto:vvsdcharan2001@gmail.com' method='post' encType='text/plain'>
                            <h3 className='font-bold'>Contact Me</h3>
                            <hr />
                            <input type='text' className='form-control' name='Name' placeholder='Name' />
                            <input type='email' className='form-control' name='Email' placeholder='Email' />
                            <textarea className='form-control' name='Description' rows={3} placeholder='Description'></textarea>

                            <button className='primary-button mt-3' type='submit'>SUBMIT</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;