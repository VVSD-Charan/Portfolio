import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';

function Home() {
  return (
    <div>
      <Header/>

      <div className='introduction flex-with-center' style={{ backgroundImage: `url('./background.svg')` }}>
         <div>
            <h1>VVSD Charan</h1>

            <div className='intro-content d-flex justify-content-between'>
                <p>Software Developer C++ <br/> MERN Stack Developer</p>
                <button className='primary-button font-bold'>Get Started</button>
            </div>

         </div>
      </div>

      <Carousel/>
    </div>
  );
}

export default Home;
