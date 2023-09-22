import React from 'react';

function Home() {
  return (
    <div>
      <div className='introduction flex-with-center' style={{ backgroundImage: `url('./background.svg')` }}>
         <div>
            <h1>VVSD Charan</h1>

            <div className='intro-content d-flex justify-content-between'>
                <p>Software Developer C++ <br/> MERN Stack Developer</p>
                <button className='primary-button font-bold w-50'>Get Started</button>
            </div>

         </div>
      </div>
    </div>
  );
}

export default Home;
