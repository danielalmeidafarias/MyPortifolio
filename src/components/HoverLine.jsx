import React, { useState } from "react";

const HoverLine = (props) => {

    const [hover, setHover] = useState(false)

    const hoverFunction = () => {
      setHover(!hover)
    }
  
    const leaveFunction = () => {
      setHover(!hover)
    }
  

    return ( 
        
        <a className='flex flex-col items-center justify-center w-22 overflow-hidden cursor-pointer'>
          <a 
            className='text-xl hover:font-medium text-zinc-900'
            onMouseOver={hoverFunction}
            onMouseLeave={leaveFunction}
            href={props.href}
          >
            {props.value}
          </a>
          
          <span 
            className={hover ?  'h-[2px] w-[100%] bg-black ease-in-out duration-100' :  'h-[2px] w-[100%] bg-black ease-in-out duration-100 -translate-x-[101%] '}
          >
          </span>
        </a>

    );
}
 
export default HoverLine;