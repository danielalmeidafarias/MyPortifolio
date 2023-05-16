import React from "react";

import { useState } from "react";

const HamburgerMenu = () => {
    const [active, setMode] = useState(false)

    const ToggleMode = () => {
        setMode(!active)
    }

    return ( 
        <div>
        
            <div className="hamburger sm:hidden flex flex-col gap-1" onClick={ToggleMode}>
                <div className={active ?  'rounded  duration-200 ease-in w-6 h-1 bg-black rotate-45 translate-y-2' : 'rounded w-6 h-1 bg-black ease-in duration-200'}></div>
                <div className={active ?  'rounded ease-in w-6 h-1 bg-black rotate-45 duration-200 invisible': ' rounded w-6 h-1 bg-black ease-in duration-200'}></div>
                <div className={active ?  'rounded  duration-200 ease-in w-6 h-1 bg-black -rotate-45 -translate-y-2' : 'rounded w-6 h-1 bg-black ease-in duration-200'}></div>
            
            </div>

            <div className={active ? 'block absolute top-16.5 right-10 bg-black w-56 h-12 p-2 ease-in-out   duration-200 rounded-bl rounded-br mt-3 sm:hidden' : ' block absolute top-16 right-10 duration-100 ease-in-out -w-24 -h-28 sm:hidden'}>
                <ul className="flex justify-around items-center">
                    <li className="text-white font-semibold text-lg" >Home</li>
                    <li className="text-white font-semibold text-lg" >Sobre</li>
                    <li className="text-white font-semibold text-lg" >Projetos</li>
                </ul>
            </div>

        </div>
            
        );
}
 
export default HamburgerMenu;