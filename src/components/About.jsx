import React from "react";
import Photo from '../assets/img/photos/eu1.jfif';
import Tecs from "./Tecs";


const About = () => {
    return ( 
        <section id="about" className="flex flex-col items-center justify-center w-screen px-5 mb-10 pt-20">
        
         
            <div className="flex flex-col items-center sm:flex-row sm:gap-10">
                <div className="flex flex-col items-center">
                    <img className="rounded-full w-64 shadow-lg shadow-stone-950/50 outline -outline-offset-1 outline-white outline-2 mb-3" src={Photo} alt="Face"/>  
                    <div className="flex flex-col items-start mb-3">
                        <p className="text-base font-light text-center">• Daniel de Almeida Farias</p>
                        <p className="text-base font-light text-center">• São José dos Campos-SP</p>
                    </div>
                </div>
                <div className="sm:w-80">
                    <p className="text-lg font-normal text-center leading-relaxed mb-10">Tenho 20 anos, sou um jovem curioso e adoro desafios, eles me movimentam. Estou em busca de minha primeira oportunidade na área da tecnologia. Quero aprender muito e criar uma carreira promissora junto de uma equipe de Desenvolvimento.</p>
                </div>
            </div>

            <Tecs />

        </section>
    );
}
 
export default About;
