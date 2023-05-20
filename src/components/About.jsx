import React from "react";
import Css from '../assets/img/tecs/CSS.svg';
import Html from '../assets/img/tecs/HTML.svg';
import Js from '../assets/img/tecs/JavaScript.svg';
import Mysql from '../assets/img/tecs/MySQL-Dark.svg';
import ReactIcon from '../assets/img/tecs/React-Dark.svg';
import Tailwind from '../assets/img/tecs/TailwindCSS-Dark.svg';

import Photo from '../assets/img/photos/eu1.jfif';

const About = () => {
    return ( 
        <section className="flex flex-col items-center gap-7 mb-10 justify-center py-16">
        
         
            <div className="flex flex-col items-center sm:flex-row sm:gap-10">
                <div className="flex flex-col p-2 items-center">
                    <img className="rounded-full w-64 mb-4 shadow-lg shadow-stone-950/50 outline -outline-offset-1 outline-white outline-2" src={Photo} alt="Face"/>  
                    <div className="flex flex-col items-start">
                        <p className="text-base font-light text-center">• Daniel de Almeida Farias</p>
                        <p className="text-base font-light text-center">• São José dos Campos-SP</p>
                    </div>
                </div>
                <div className="p-2 sm:w-80">
                    <p className="text-lg font-normal text-center leading-relaxed">Tenho 20 anos, sou um jovem curioso e adoro desafios, eles me movimentam. Estou em busca de minha primeira oportunidade na área da tecnologia. Quero aprender muito e criar uma carreira promissora junto de uma equipe de Desenvolvimento.</p>
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
