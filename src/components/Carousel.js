import React from "react";
import {FaReact,FaJs,FaBootstrap,FaNodeJs,FaPhp} from 'react-icons/fa'
import {BsGit,BsFiletypeSql} from 'react-icons/bs'
import {TbBrandCpp} from 'react-icons/tb'

function Carousel() {
    return (
        <div>
            
            <div className="carousel-parent position-relative">
                <h1 className="position-absolute top-0 start-0 end-0 text-center mt-5 animated-tech">Technologies I use</h1>

                <div className="gallery">
                    <span style={{'--i' : 1}}><FaReact color="cyan"/></span>
                    <span style={{'--i' : 2}}><FaBootstrap color="#023e8a"/></span>
                    <span style={{'--i' : 3}}><FaNodeJs color="green"/></span>
                    <span style={{'--i' : 4}}><BsGit color="#e36414"/></span>
                    <span style={{'--i' : 5}}><BsFiletypeSql color="#3c6e71"/></span>
                    <span style={{'--i' : 6}}><FaJs color="yellow"/></span>
                    <span style={{'--i' : 7}}><TbBrandCpp color="white"/></span>
                    <span style={{'--i' : 8}}><FaPhp color="#003049"/></span>
                </div>

            </div>

        </div>
    );
}

export default Carousel