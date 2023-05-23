import React, { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Home from './components/Home';
import Projects from './components/Projects';

const App = () => {

  const [theme, setTheme] = useState(true)

  return (
    <div className="scroll-smooth">
      <div className= {theme ? "bg-zinc-200 text-zinc-900 overflow-x-auto" : "bg-zinc-900 text-zinc-100 overflow-x-auto"}>
          <Header setTheme={setTheme} theme={theme}/>    
            <Home /> 
            <About />
            <Projects />
      </div>
    </div>
  );
}
 
export default App;
