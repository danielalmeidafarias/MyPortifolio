import React from "react";
import DarkModeButton from "./DarkModeButton";
import HamburgerMenu from "./HamburgerMenu";
import HoverLine from "./HoverLine";



const Header = ({setTheme, theme}) => {
    return (  
        <div className=" w-[100vw]">
            <div className="flex justify-between p-8 items-center sm:px-14 bg-zinc-100 w-full  shadow-md shadow-gray-500/20 text-zinc-900">
            
                    
                <a href="">
                    <h2 className="text-xl sm:text-3xl font-bold font-alt">{'<'}MyPortifolio{'/>'}</h2>
                </a>

                <div className="flex items-center">
                    <div className="hidden md:flex gap-3 text-xl pr-5 mr-8">
                        <HoverLine value='Home'/>
                        <HoverLine value='Sobre'/>
                        <HoverLine value='Projetos'/>
                        
                    </div>

     
                </div>

               
                <div>
                    <DarkModeButton  setTheme={setTheme} theme={theme}/>
                    <HamburgerMenu />
                </div>

                       
                   


            </div>
        </div>
    );
}
 
export default Header;
