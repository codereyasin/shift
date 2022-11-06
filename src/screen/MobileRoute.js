import { Route, Routes } from "react-router-dom";

import React from "react";
import {
  MobileHero,
  MobileContact,
  MobileOurVision,
  MobileAbout,
  Mobilefaq,
  Singup,
} from "./Index";

const MobileRoute = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<MobileHero />} />
      <Route path="/MobileContact" element={<MobileContact />} />
      <Route path="/about" element={<MobileAbout />} />
      <Route path="/ourvision" element={<MobileOurVision />} />
      <Route path="/faq" element={<Mobilefaq />} />
      <Route path="/signup" element={<Singup />} />{" "}
      </Routes>
    </>
  );
};

export default MobileRoute;
