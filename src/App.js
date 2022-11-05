import AllSection from "./Layout/AllSection";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App ">
      
    <main>
     <Routes>
            <Route path="/*" element={<Hero />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/signup" element={<Signup />} />
      </Routes>
      {/*    <div className="sm:flex hidden"> */}
      <div className="">
      <AllSection/>
      </div>
    </main>
    </div>
  );
}

export default App;
