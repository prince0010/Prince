import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
        {/* <h1 className="text-4xl font-bold"> Test </h1> */}
        <Navbar /> 
        
        <Home />

        <About />

        <Skills />
        
    </div>
  );
}

export default App;
