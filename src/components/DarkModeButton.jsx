import React, { useState } from "react";

const DarkModeButton = () => {
  
    const [theme, setTheme] = useState(true)
    const changeTheme = () => {
      setTheme(!theme)
    }
    
    //className='w-16 h-16 bg-gray-100 rounded-full absolute'
    
    return (
        <div className='hidden md:block ml-3 w-16 h-8 bg-gradient-to-r from-zinc-500 via-zinc-700 to-zinc-900 rounded-full relative shadow-sm shadow-gray-700'>
          <div onClick={changeTheme} className={theme ? 'cursor-pointer w-8 h-8 bg-gray-200 rounded-full absolute ease-in-out duration-300 shadow-sm shadow-black' : 'cursor-pointer w-8 h-8 bg-gray-200 rounded-full absolute translate-x-[32px] ease-in-out duration-300 shadow-sm shadow-black'}></div>
        </div>
    );
  
}
 
export default DarkModeButton;
