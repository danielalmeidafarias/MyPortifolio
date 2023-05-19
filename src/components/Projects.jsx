import React from 'react';
import ProjectImage from './ProjectImage';

import Countdown from '../assets/img/projects/countdown.png';
import JsCalculator from '../assets/img/projects/js_calculator.png';
import ToDoList from '../assets/img/projects/js_to_do_list.png';
import ThemeSwitcher from '../assets/img/projects/theme_switcher.png';


const projects = () => {
    return ( 

    <div className='flex flex-col items-center gap-10'>
        <h2 className='text-6xl font-bold tracking-tighter'>Projetos</h2>

        <div>
            <ProjectImage title="To Do List" content="Lista de tarefas criada com JavaScript. As tarefas ficam guardadas no localStorage" src={ToDoList} github="https://github.com/danielalmeidafarias/JS-To-do-List" href="https://harmonious-stardust-0e6b10.netlify.app"/>
            <ProjectImage title="Theme Switcher" content="Botão que muda o tema em dark e light criado com JavaScript" src={ThemeSwitcher} github="https://github.com/danielalmeidafarias/Desafio-Theme-Switcher-" href="https://beautiful-arithmetic-0f22ba.netlify.app/"/>
            <ProjectImage title="Calculator" content="Calculadora criada com JavaScript" src={JsCalculator} github="https://github.com/danielalmeidafarias/Calculadora-JavaScript" href="https://benevolent-buttercream-90be16.netlify.app/"/>
            <ProjectImage title="Countdown" content="Countdown em JavaScript criado para o desafio da Rocketseat" src={Countdown} github="https://github.com/danielalmeidafarias/Desafio-Countdown---Rocketseat" href="https://stellular-treacle-3665bc.netlify.app/"/>

        </div>
        
    </div>

     );
}
 
export default projects;
