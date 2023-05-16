import React from "react";
import Logo from '../assets/img/programas.png'
import HamburgerMenu from "./HamburgerMenu";


const Header = () => {
    return (  
        <div className="">
            <div className="flex justify-between p-8 items-center sm:px-14">
                <div className="flex items-center gap-1">
                    <img src={Logo} alt="Logo" className="w-10" />
                    <h2 className="text-xl sm:text-2xl font-semibold">My Portifolio</h2>
                </div>
                <div className="flex gap-3 items-center">
                    <ul className="hidden sm:flex gap-3 text-xl">
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Projetos</li>
                    </ul>
                    <div>
                        <HamburgerMenu />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Header;
