import React from "react";
import {FaReact,FaJs,FaBootstrap,FaNodeJs,FaPhp} from 'react-icons/fa'
import {BsGit,BsFiletypeSql} from 'react-icons/bs'
import {TbBrandCpp} from 'react-icons/tb'

function Carousel() {
    return (
        <div>
            
            <div className="carousel-parent position-relative">
                <h1 className="position-absolute top-0 start-0 end-0 text-center mt-5">Technologies I use</h1>

                <div className="gallery">
                    <span><FaReact color="cyan"/></span>
                    <span><FaBootstrap color="purple"/></span>
                    <span><FaNodeJs color="green"/></span>
                    <span><BsGit color="orange"/></span>
                    <span><BsFiletypeSql color="blue"/></span>
                    <span><FaJs color="yellow"/></span>
                    <span><TbBrandCpp color="blue"/></span>
                    <span><FaPhp color="purple"/></span>
                </div>

            </div>

        </div>
    );
}

export default Carousel