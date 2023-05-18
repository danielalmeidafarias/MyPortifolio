import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Home from './components/Home';
import Projects from './components/Projects';


const App = () => {
  return (
    <div>
      <div className="h-full n w-ful">
   
        <Header />

        <Home />

        <About />

        <Projects />

      </div>


      

    </div>

    

  );
}
 
export default App;
