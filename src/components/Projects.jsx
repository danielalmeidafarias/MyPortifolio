import React from 'react'

import Calculator from '../assets/img/projects/js_calculator.png'
import Countdown from '../assets/img/projects/countdown.png'
import ToDoList from '../assets/img/projects/js_to_do_list.png'
import ThemeSwitcher from '../assets/img/projects/theme_switcher.png'

const projects = () => {
    return ( 

    <div className='flex flex-col items-center gap-10 mb-14'>
        <h2 className='text-6xl font-bold tracking-tighter'>Projetos</h2>

        <div className='flex flex-col items-center gap-5'>
            <div className='flex flex-col items-center'>
                <p className='p-3 text-2xl text-center font-light'>JS To Do List</p>
                <a href="https://harmonious-stardust-0e6b10.netlify.app/" rel="noreferrer" target="_blank"><img className="w-64 sm:w-96 rounded-lg shadow-lg shadow-zinc-500" src={ToDoList} alt=""  /></a>
            </div>

            <div className='flex flex-col items-center'>
                <p className='p-3 text-2xl text-center font-light'>Theme Switcher</p>
                <a href=" https://beautiful-arithmetic-0f22ba.netlify.app/"  rel="noreferrer" target="_blank">
                    <img className="w-64 sm:w-96 rounded-lg shadow-lg shadow-zinc-500" src={ThemeSwitcher} alt="" />
                </a>
            </div>

            <div className='flex flex-col items-center'>
                <p className='p-3 text-2xl text-center font-light'>JS Calculator</p>
                <a href=" https://benevolent-buttercream-90be16.netlify.app/"  rel="noreferrer" target="_blank">
                    <img className="w-64 sm:w-96 rounded-lg shadow-lg shadow-zinc-500" src={Calculator} alt="" />
                </a>
            </div>

            <div className='flex flex-col items-center'>
                <p className='p-3 text-2xl text-center font-light'>Countdown Rocketseat</p>
                <a href="https://stellular-treacle-3665bc.netlify.app/"  rel="noreferrer" target="_blank">
                    <img className="w-64 sm:w-96 rounded-lg shadow-lg shadow-zinc-500" src={Countdown} alt="" />
                </a>
            </div>
        </div>
    </div>

     );
}
 
export default projects;
