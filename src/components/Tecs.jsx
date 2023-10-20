import React from "react";

import Express from '../assets/img/tecs/express.png'
import Mysql from '../assets/img/tecs/mysql.png'
import Nodejs from '../assets/img/tecs/nodejs.png'
import Postgres from '../assets/img/tecs/postgres.svg'
import Prisma from '../assets/img/tecs/prisma.png'
import ReactImage from '../assets/img/tecs/react.png'
import ReactNative from '../assets/img/tecs/reactnative.png'
import Rust from '../assets/img/tecs/rust.png'
import Tailwindcss from '../assets/img/tecs/tailwindcss.png'
import Typescript from '../assets/img/tecs/typescript.png'


const Tecs = () => {
    return ( 

        <div>
            <div className="flex flex-col items-center text-2xl font-semibold text-center mb-10">
                <h3 className="text-2xl md:text-3xl mb-3 font-alt">Tecnologias que estou estudando</h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 sm:grid sm:gap-10 md:gap-16 gap-4">
                    {/* <img className="w-20 sm:w-20" src={Html} alt="" />
                    <img className="w-20 sm:w-20" src={Css} alt="" />
                    <img className="w-20 sm:w-20" src={Js} alt="" />
                    <img className="w-20 sm:w-20" src={Mysql} alt="" />
                    <img className="w-20 sm:w-20" src={Tailwind} alt="" />
                    <img className="w-20 sm:w-20" src={ReactIcon} alt="" /> */}
                    <img className="w-20 sm:w-20" src={ReactImage} alt="" />
                    <img className="w-20 sm:w-20" src={Nodejs} alt="" />
                    <img className="w-20 sm:w-20" src={Rust} alt="" />
                    <img className="w-20 sm:w-20" src={Typescript} alt="" />
                    <img className="w-20 sm:w-20" src={Express} alt="" />
                    <img className="w-20 sm:w-20" src={Prisma} alt="" />
                    <img className="w-20 sm:w-20" src={Postgres} alt="" />
                    <img className="w-20 sm:w-20" src={Mysql} alt="" />
                    <img className="w-20 sm:w-20" src={ReactNative} alt="" />
                    <img className="w-20 sm:w-20" src={Tailwindcss} alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default Tecs;