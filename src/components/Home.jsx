import React from "react";
import Gmail from '../assets/img/social/gmail.png';
import Linkedin from '../assets/img/social/linkedin.png';
import Github from '../assets/img/social/placa-do-github.png';
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import { FaAnglesDown } from "react-icons/fa6";

const Home = () => {
    return (
        <div className="h-screen">
            <div className="w-screen h-[80px]"></div>
            <section id="home" className="flex flex-col justify-center w-screen h-[calc(100%_-_80px)] min-h-[700px]">

                <div className="flex flex-col items-center justify-center mb-4">


                    <p className="text-3xl sm:text-4xl md:text-6xl font-semibold ">Olá! Sou</p>
                    <p className="text-[86px] sm:text-8xl md:text-9xl font-extrabold">Daniel</p>

                    <p className="text-center font-light text-lg">• Análise e Desenvolvimento de Sistemas</p>
                    <p className="text-center font-light text-lg">• Desenvolvedor Full-Stack</p>
                </div>



                <div className="flex justify-center gap-8">
                    <div className="">
                        <a className="flex flex-col items-center " href="https://www.linkedin.com/in/daniel-de-almeida-farias-495b49143/" rel="noreferrer" target="_blank">
                            {/* <img className=" h-10 sm:h-16" src={Linkedin} alt="Linkedin" /> */}
                            <FaLinkedin size={70} color="#0e76a8" />
                            <p className="font-light hover:font-normal">Linkedin</p>
                        </a>
                    </div>
                    <div>
                        <a className="flex flex-col items-center" href="https://github.com/danielalmeidafarias?tab=repositories" rel="noreferrer" target="_blank">
                            {/* <div className="bg-zinc-100 rounded-2xl"><img className="h-10 sm:h-16" src={Github} alt="Github" /></div> */}
                            <FaGithubSquare size={70} />
                            <p className=" font-light hover:font-normal" >Github</p>
                        </a>
                    </div>
                    <div>
                        <a href="https://wa.me/5512997529937" rel="noreferrer" target="_blank" className="flex flex-col items-center" >
                            <FaSquareWhatsapp size={70} color="green" />
                            {/* <img className="h-10 sm:h-16" src={Gmail} alt="Gmail" /> */}
                            <p className=" font-light hover:font-normal" >Whatsapp</p>
                        </a>
                    </div>
                </div>


                <a href='#about' className="w-screen flex justify-center p-8 scroll-smooth"><FaAnglesDown size={80} /></a>
            </section>
        </div>

    );
}

export default Home;
