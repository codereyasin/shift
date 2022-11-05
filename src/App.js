import AllSection from "./Layout/AllSection";
import { Route, Routes } from "react-router-dom";

import About from "./components/About";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App ">
      <main>
        <Routes>
          <Route path="/" element={<AllSection />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/signup" element={<Signup />} />
        </Routes>
           <div className="sm:flex hidden">
        </div>
      </main>
    </div>
  );
}

export default App;
