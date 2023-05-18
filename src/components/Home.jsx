import React from "react";
import Gmail from '../assets/img/social/gmail.png';
import Linkedin from '../assets/img/social/linkedin.png';
import Github from '../assets/img/social/placa-do-github.png';



const Home = () => {
    return ( 
        <section className="flex flex-col justify-center mb-10">
            <div className="w-full flex flex-col items-center pt-6 px-4 justify-center mb-8">
                <p className="text-4xl sm:text-5xl md:text-6xl font-semibold ">Olá! Sou</p>
                <p className="text-7xl sm:text-8xl md:text-9xl font-bold ">Daniel</p>
                <p className="text-center font-light">•Estudante de Análise e Desenvolvimento de Sistemas</p>
                <p className="text-center font-light">•Desenvolvedor Web</p>
            </div>

            

            <div className="flex py-6 justify-center gap-8">
                <div className="">
                    <a className="flex flex-col items-center" href="https://www.linkedin.com/in/daniel-de-almeida-farias-495b49143/" rel="noreferrer" target="_blank">
                        <img className=" h-10 sm:h-16" src={Linkedin} alt="Linkedin" />
                        <p className=" font-light">Linkedin</p>                  
                    </a>
                </div>
                <div>
                    <a className="flex flex-col items-center" href="https://github.com/danielalmeidafarias?tab=repositories" rel="noreferrer" target="_blank">
                        <div className="bg-zinc-100 rounded-2xl"><img className="h-10 sm:h-16" src={Github} alt="Github" /></div>
                        <p className=" font-light" >Github</p>
                    </a>
                </div>
                <div>
                    <a href="mailto:danielalmeidafarias2002@gmail.com" className="flex flex-col items-center" >
                        <img className="h-10 sm:h-16" src={Gmail} alt="Gmail" />
                        <p className=" font-light" >E-mail</p>
                    </a>
                </div>
            </div>
        </section>
     );
}
 
export default Home;
