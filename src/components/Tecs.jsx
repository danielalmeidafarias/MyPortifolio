import React from "react";

import Css from '../assets/img/tecs/CSS.svg';
import Html from '../assets/img/tecs/HTML.svg';
import Js from '../assets/img/tecs/JavaScript.svg';
import Mysql from '../assets/img/tecs/MySQL-Dark.svg';
import ReactIcon from '../assets/img/tecs/React-Dark.svg';
import Tailwind from '../assets/img/tecs/TailwindCSS-Dark.svg';


const Tecs = () => {
    return ( 

        <div>
            <div className="flex flex-col items-center text-2xl font-semibold text-center mb-10">
                <h3 className="text-2xl mb-3 font-alt">Tecnologias que estou estudando</h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 sm:grid sm:gap-10 md:gap-16 gap-4">
                    <img className="w-20 sm:w-20" src={Html} alt="" />
                    <img className="w-20 sm:w-20" src={Css} alt="" />
                    <img className="w-20 sm:w-20" src={Js} alt="" />
                    <img className="w-20 sm:w-20" src={Mysql} alt="" />
                    <img className="w-20 sm:w-20" src={Tailwind} alt="" />
                    <img className="w-20 sm:w-20" src={ReactIcon} alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default Tecs;