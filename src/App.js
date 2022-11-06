import AllSection from "./Layout/AllSection";
import { Route, Routes } from "react-router-dom";
import { Ourvision, Singup } from "./components/Index";

function App() {
  return (
    <div className="App ">
      <main>
        <Routes>
          <Route path="/*" element={<AllSection />} />
          <Route path="/ourvision" element={<Ourvision />} />
          <Route path="/signup" element={<Singup />} />
        </Routes>
      </main>
    </div>
  );
}


export default App;
