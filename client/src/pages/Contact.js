import React from 'react'

function Contact() {
    return (
        <div>
            <div className='container contact mt-5'>
                <div className='row pt-5'>
                    <div className='col-md-6 p-5'>
                        <img src='./contactme.svg' alt='contact-us'/>
                    </div>

                    <div className='col-md-6'>
                        <form className='contact-form m-2 p-5 n-box2' action='mailto:vvsdcharan2001@gmail.com' method='post' encType='text/plain'>
                            <input type='text' className='form-control' placeholder='Name'/>
                            <input type='email' className='form-control' placeholder='Email'/>
                            <textarea className='form-control' rows={3} defaultValue={""} placeholder='Description'/>

                            <button className='primary-button mt-5'>SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;