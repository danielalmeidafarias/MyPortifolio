import React, { useState } from "react";

const ProjectImage = (props) => {
    const [overflow, setOverflow] = useState(false)

    const overflowHover = () => {
        setOverflow(true)
    }

    const overflowLeave = () => {
        setOverflow(false)
    }

    const clickOverflow = () => {
        setOverflow(!overflow)
    }
    return ( 

        <div>
            <a 
            href={props.href}
            rel="noreferrer" 
            target="_blank"
            className=" flex justify-center items-center cursor-pointer"
            onMouseOver={overflowHover}  
            onMouseLeave={overflowLeave}   
            >
                <img 
                className="w-64 sm:w-96 rounded-lg shadow-lg shadow-stone-950/50" 
                src={props.src} 
                alt="To do list" 
                
                />
                <div className="overflow-hidden rounded-lg absolute">
                    <div 
                        className={overflow ? "duration-300 bg-zinc-900/90 w-64 sm:w-96 h-[144px] sm:h-[218px]  gap-1 flex flex-col justify-center items-centers px-7" : "translate-y-[218px] gap-1  flex flex-col  duration-300   w-64 sm:w-96 h-[144px] sm:h-[218px] justify-center items-centers px-7 invisible"}>
                        <h1 className="text-white text-xl sm:2xl">{props.title}</h1>
                        <p className="text-white font-extralight text-xs sm:text-base">{props.content}</p>
                        <a rel="noreferrer" target="_blank" className="text-white font-normal hover:font-bold" href={props.github}>Repositório Github</a>
                        
                    </div>
                </div>
            </a>
            <p 
            className="font-normal text-md flex sm:hidden justify-end py-1 px-3 cursor-pointer underline" 
            onClick={clickOverflow}
            >
            Saiba mais
            </p>
        </div>
    );
}
 
export default ProjectImage;
