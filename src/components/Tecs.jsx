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

import { SiDogecoin, SiNestjs } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiLinux } from "react-icons/si";
import { SiReactN } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import {FaAnglesDown} from 'react-icons/fa6'

const Tecs = () => {
    return (
        <div className="h-auto">
            <div id="tecs" className="flex flex-col items-center text-2xl font-semibold text-center mb-10">
                <h3 className="text-2xl md:text-3xl mb-3 font-alt">Principais ferramentas que utilizo</h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 sm:grid sm:gap-10 md:gap-16 gap-4">
                    <SiLinux size={60} />
                    <SiTypescript size={60} />
                    <SiNodedotjs size={60} />
                    <SiExpress size={60} />
                    <SiNestjs size={60} />
                    <SiPostgresql size={60} />
                    <SiDocker size={60} />
                    <SiPrisma size={60} />
                    <FaReact size={60} />
                    <TbBrandReactNative size={60} />
                    <SiStyledcomponents size={60} />
                    <SiTailwindcss size={60} />

                </div>
            </div>
            {/* <a href='#projects' className="w-screen flex justify-center p-8 scroll-smooth"><FaAnglesDown size={80} /></a> */}

        </div>
    );
}

export default Tecs;