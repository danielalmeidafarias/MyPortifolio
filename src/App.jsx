import React, { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Home from './components/Home';
import Projects from './components/Projects';




const App = () => {

  const [theme, setTheme] = useState(true)

  const ThemeSwitch = () => {
    setTheme(!theme)
  }

  return (
    <div className="">
      <div className= "bg-zinc-200 text-zinc-900 w-[300vw] ">

        
          <Header />
  

        <div className="h-full w-[300vw] flex justify-between">
          <Home />

          <About />

          <Projects />

        </div>

      </div>


      

    </div>

    

  );
}
 
export default App;
