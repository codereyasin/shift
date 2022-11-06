import AllSection from "./Layout/AllSection";
import { Route, Routes } from "react-router-dom";
import { Singup } from "./components/Index";

function App() {
  return (
    <div className="App ">
      <main>
        <Routes>
          <Route path="/" element={<AllSection />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/signup" element={<Singup />} />
        </Routes>
           <div className="sm:flex hidden">
        </div>
      </main>
    </div>
  );
}


export default App;
