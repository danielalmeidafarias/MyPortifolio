import React, { useState } from "react";

const ProjectImage = (props) => {
    const [overflow, setOverflow] = useState(false)

    const overflowHover = () => {
        setOverflow(true)
    }

    const overflowLeave = () => {
        setOverflow(false)
    }

    return ( 


        <a 
        href={props.href}
        rel="noreferrer" 
        target="_blank"
        className="w-96 flex justify-center items-center pt-8 mb-8 cursor-pointer"
        onMouseOver={overflowHover}  
        onMouseLeave={overflowLeave}   
        >
            <img 
            className="w-64 sm:w-96 rounded-lg shadow-lg shadow-zinc-500" 
            src={props.src} 
            alt="To do list" 
            
            />
            <div className="overflow-hidden absolute rounded-lg">
                <div
                     
                    className={overflow ? "duration-300 bg-zinc-900/90 w-96 h-[218px] gap-1  flex flex-col justify-center items-centers px-7 " : "translate-y-[218px] gap-1  flex flex-col  duration-300  w-96 h-[218px]  justify-center items-centers px-7 invisible"}>
                    <h1 className="text-white text-2xl">{props.title}</h1>
                    <p className="text-white font-extralight">{props.content}</p>
                    <a rel="noreferrer" target="_blank" className="text-white font-normal hover:font-bold" href={props.github}>Repositório Github</a>
                    
                </div>
            </div>
        </a>
    );
}
 
export default ProjectImage;
