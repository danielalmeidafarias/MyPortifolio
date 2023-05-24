import React from "react";
import DarkModeButton from "./DarkModeButton";
import HamburgerMenu from "./HamburgerMenu";
import HoverLine from "./HoverLine";



const Header = ({setTheme, theme}) => {
    return (  
        <div className="">
            <div className="flex justify-between items-center bg-zinc-100 shadow-md shadow-gray-500/20 text-zinc-900 w-screen px-5 py-2 fixed">
            

                <div className="flex items-center gap-4">
                    <DarkModeButton  setTheme={setTheme} theme={theme}/>

                    <a href="https://danielalmeidafarias-portifolio.netlify.app/">
                        <div className="border-black border-4 rounded-sm">
                            <h2 className="text-xl sm:text-3xl font-bold font-alt">{'<'}MyPortifolio{'/>'}</h2>
                        </div>  
                    </a>
                </div>

                    <div>
                        <div className="hidden md:flex gap-3 text-xl mr-5">
                            <HoverLine 
                            value='Home'
                            href="#home"
                            />
                            <HoverLine 
                            value='Sobre'
                            href='#about'
                            />
                            <HoverLine 
                            value='Projetos'
                            href='#projects'
                            />
                    </div>
                        <HamburgerMenu />
                    </div>



            </div>
        </div>
    );
}
 
export default Header;
