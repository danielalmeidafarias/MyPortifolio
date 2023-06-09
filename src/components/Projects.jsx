import React from 'react';
import ProjectImage from './ProjectImage';

import Countdown from '../assets/img/projects/countdown.png';
import JsCalculator from '../assets/img/projects/js_calculator.png';
import ToDoList from '../assets/img/projects/js_to_do_list.png';
import ThemeSwitcher from '../assets/img/projects/theme_switcher.png';


const projects = () => {
    return ( 

    <div id='projects' className='flex flex-col items-center w-screen pb-12'>
    
        <h1 className='font-extrabold text-4xl mb-3'>Projetos</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 items-around gap-4'>
            <ProjectImage 
                title="To Do List" 
                content="Lista de tarefas criada com JavaScript. As tarefas ficam guardadas no localStorage" 
                src={ToDoList} 
                github="https://github.com/danielalmeidafarias/JS-To-do-List" 
                href="https://danielalmeidatodolist.netlify.app"/>
            <ProjectImage 
                title="Theme Switcher" 
                content="Botão que muda o tema em dark e light criado com JavaScript" 
                src={ThemeSwitcher} 
                github="https://github.com/danielalmeidafarias/Desafio-Theme-Switcher-" 
                href="https://danielalmeidafarias-themeswitcher.netlify.app/"/>
            <ProjectImage 
                title="Calculator" 
                content="Calculadora criada com JavaScript" 
                src={JsCalculator} 
                github="https://github.com/danielalmeidafarias/Calculadora-JavaScript" 
                href="https://danielalmeidafarias-jscalculator.netlify.app/"/>
            <ProjectImage 
                title="Countdown" 
                content="Countdown em JavaScript criado para o desafio da Rocketseat" 
                src={Countdown} 
                github="https://github.com/danielalmeidafarias/Desafio-Countdown---Rocketseat" 
                href="https://danielalmeidafarias-countdown.netlify.app/"/>

        </div>
        
    </div>

     );
}
 
export default projects;
