import React from "react";
import DarkModeButton from "./DarkModeButton";
import HamburgerMenu from "./HamburgerMenu";
import HoverLine from "./HoverLine";



const Header = () => {
    return (  
        <div className=" w-full">
            <div className="flex justify-between p-8 items-center sm:px-14 bg-zinc-100 fixed w-full  shadow-md shadow-gray-500/20">
            
                    
                <a href="">
                    <h2 className="text-xl sm:text-3xl font-semibold font-alt hover:text-zinc-900/20 duration-50">{'<'}MyPortifolio{'/>'}</h2>
                </a>

                <div className="flex items-center">
                    <div className="hidden md:flex gap-3 text-xl  mr-8">
                        <HoverLine value='Home'/>
                        <HoverLine value='Sobre'/>
                        <HoverLine value='Projetos'/>
                    </div>

                    <div>
                        <div>
                            <DarkModeButton />
                        </div>
                        <div>
                            <HamburgerMenu />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default Header;
