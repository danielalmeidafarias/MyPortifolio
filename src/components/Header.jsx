import React from "react";
import Logo from '../assets/img/programas.png';
import DarkModeButton from "./DarkModeButton";
import HamburgerMenu from "./HamburgerMenu";
import HoverLine from "./HoverLine";



const Header = () => {
    return (  
        <div className="">
            <div className="flex justify-between p-8 items-center sm:px-14">
                <div className="flex items-center gap-1">
                    <img src={Logo} alt="Logo" className="w-10" />
                    <h2 className="text-xl sm:text-2xl font-medium font-alt">My Portifolio</h2>
                </div>
                <div className="flex items-center">
                    <ul className="hidden md:flex gap-3 text-xl">
                        <HoverLine value='Home'/>
                        <HoverLine value='Sobre'/>
                        <HoverLine value='Projetos'/>
                    </ul>
                    <div>
                        <DarkModeButton />
                    </div>
                    <div>
                        <HamburgerMenu />
                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default Header;
