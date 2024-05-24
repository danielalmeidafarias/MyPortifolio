import React from "react";
import Photo from '../assets/img/photos/eu1.jfif';
import Tecs from "./Tecs";
import { FaAnglesDown } from "react-icons/fa6";




const About = () => {
    return (
        <section id="about" className="flex flex-col items-center justify-center w-screen px-5 mb-10 pt-20">
            <div className="w-screen flex flex-col items-center  h-auto">
                <h1 className="font-extrabold text-4xl mb-3 w-full text-center">
                    Sobre
                </h1>
                <div className="flex flex-col items-center sm:flex-row sm:gap-10">
                    <div className="flex flex-col items-center">
                        <img className="rounded-full w-64 shadow-lg shadow-stone-950/50 outline -outline-offset-1 outline-white outline-2 mb-3" src={Photo} alt="Face" />
                        <div className="flex flex-col items-start mb-3">
                            <p className="text-base font-light text-center">• Daniel de Almeida Farias</p>
                            <p className="text-base font-light text-center">• São José dos Campos-SP</p>
                        </div>
                    </div>
                    <div className="sm:w-80">
                        <p className="text-lg font-normal text-center leading-relaxed mb-10">Me chamo Daniel de Almeida Farias, estudo desenvolvimento de software e curso Análise e Desenvolvimento de Sistemas na Universisade Anhambi Morumbi. Fora os estudos da faculdade, foco meu tempo na prática, com projetos pessoais, utilizando TypeScript, Node.js na construção de API's com Express e Nest.js, React.js, Frameworks CSS como Tailwindcss e Styled-components no front-end e Banco de dados relacional e ORM's . Acredito que essa é a melhor forma de aprender, colocando a mão na massa!</p>
                    </div>

                </div>
                {/* <a  className="w-screen flex justify-center p-8 scroll-smooth"><FaAnglesDown size={80} /></a> */}

            </div>

            <Tecs />
        </section>
    );
}

export default About;
