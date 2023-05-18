import React from "react";

import Css from '../assets/img/tecs/css-3.png';
import Html from '../assets/img/tecs/html-5 - Copia.png';
import Js from '../assets/img/tecs/js - Copia.png';
import ReactIcon from '../assets/img/tecs/logo512.png';
import Mysql from '../assets/img/tecs/mysql  - Copia.png';
import Tailwind from '../assets/img/tecs/tailwind - Copia.png';

import Photo from '../assets/img/photos/eu1.jfif';

const About = () => {
    return ( 
        <section className="flex flex-col items-center gap-7 mb-10">
            <h2 className="text-6xl font-bold tracking-tighter">Sobre</h2>
  
         
            <div className="flex flex-col items-center sm:flex-row sm:gap-10">
                <div className="flex flex-col p-2 items-center">
                    <img className="rounded-full w-64 mb-4" src={Photo} alt="Face"/>  
                    <div className="flex flex-col items-start">
                        <p className="text-lg font-thin text-center">• Daniel de Almeida Farias</p>
                        <p className="text-lg font-thin text-center">• São José dos Campos-SP</p>
                    </div>
                </div>
                <div className="p-2 sm:w-80">
                    <p className="text-xl font-normal text-center leading-relaxed">Tenho 20 anos, sou um jovem curioso e adoro desafios, eles me movimentam. Estou em busca de minha primeira oportunidade na área da tecnologia. Quero aprender muito e criar uma carreira promissora junto de uma equipe de Desenvolvimento.</p>
                </div>
            </div>

            <div className="flex flex-col items-center text-2xl font-semibold text-center gap-4">
                <h3 className="text-2xl mb-5">Tecnologias que estou estudando</h3>
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-6 sm:grid sm:gap-10 md:gap-16">
                    <img className="w-20 sm:w-20" src={Html} alt="" />
                    <img className="w-20 sm:w-20" src={Css} alt="" />
                    <img className="w-20 sm:w-20" src={Js} alt="" />
                    <img className="w-20 sm:w-20" src={Mysql} alt="" />
                    <img className="w-20 sm:w-20" src={Tailwind} alt="" />
                    <img className="w-20 sm:w-20" src={ReactIcon} alt="" />
                </div>
            </div>
        </section>
    );
}
 
export default About;
