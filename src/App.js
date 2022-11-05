import AllSection from "./Layout/AllSection";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      
    <main>
     <Routes>
            <Route path="/*" element={<Hero />} />
            <Route path="/About" element={<About />} />
      </Routes>
      
      <div className="sm:flex hidden">
      <AllSection/>
      </div>
    </main>
    </div>
  );
}

export default App;
