import React, { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Home from './components/Home';
import Projects from './components/Projects';

import createBrowserRouter from 'react-router-dom'




const App = () => {

  const [theme, setTheme] = useState(true)

  return (
    <div className="">
      <div className= {theme ? "bg-zinc-200 text-zinc-900 h-full" : "bg-zinc-700 text-zinc-300 h-full"}>

        
          <Header setTheme={setTheme} theme={theme}/>
  
          <Home />

          <About />

          <Projects />

      

      </div>


      

    </div>

    

  );
}
 
export default App;
