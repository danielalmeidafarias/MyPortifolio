import React from "react";
import Header from "./components/Header";
import Home from './components/Home'
import About from "./components/About";
import Projects from './components/Projects'


const App = () => {
  return (
    <div>
      <div className="h-screen n w-ful">
   
        <Header />

        <Home />

        <About />

        <Projects />

      </div>


      

    </div>

    

  );
}
 
export default App;
