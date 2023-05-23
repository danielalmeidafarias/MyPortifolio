import React from "react";

import { useState } from "react";


const HamburgerMenu = () => {
    const [active, setMode] = useState(false)

    const ToggleMode = () => {
        setMode(!active)
    }

    return ( 
        <div className="mr-5">
        
            <div className="md:hidden flex flex-col gap-1 cursor-pointer" onClick={ToggleMode}>
                <div className={active ?  'rounded  duration-200 ease-in w-6 h-1 bg-black rotate-45 translate-y-2' : 'rounded w-6 h-1 bg-black ease-in duration-200'}></div>
                <div className={active ?  'rounded ease-in w-6 h-1 bg-black rotate-45 duration-200 invisible': ' rounded w-6 h-1 bg-black ease-in duration-200'}></div>
                <div className={active ?  'rounded  duration-200 ease-in w-6 h-1 bg-black -rotate-45 -translate-y-2' : 'rounded w-6 h-1 bg-black ease-in duration-200'}></div>
            
            </div>

            <div className={active ? 'block absolute top-16.5 right-10 bg-zinc-800 w-56 h-12 p-2 ease-in-out   duration-200 rounded-bl rounded-br mt-3 md:hidden' : ' block absolute top-16 right-10 duration-100 ease-in-out -w-24 -h-28 md:hidden'}>
                <ul className="flex justify-around items-center">
                    <li className={active ? "cursor-pointer text-zinc-200 font-medium hover:font-semibold text-lg" : 'hidden'} >Home</li>
                    <li className={active ? "cursor-pointer text-zinc-200 font-medium hover:font-semibold text-lg" : 'hidden'} >Sobre</li>
                    <li className={active ? "cursor-pointer text-zinc-200 font-medium hover:font-semibold text-lg" : 'hidden'} >Projetos</li>
                </ul>
            </div>

        </div>
            
        );
}
 
export default HamburgerMenu;