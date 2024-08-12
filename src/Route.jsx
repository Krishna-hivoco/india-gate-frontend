import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./routes/home.jsx";
import ThankYou from "./components/ThankYou.jsx";

import Congratulations from "./components/Congratulations.jsx";

import Register from "./routes/register.jsx";
import Otp from "./routes/otp.jsx";
import Thankyou from "./routes/thank-you.jsx";
import { useState } from "react";
import Congratulation from "./routes/Congratulation.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/thank-you" element={<ThankYou />} /> */}
          <Route path="/congratulations" element={<Congratulations />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-otp" element={<Otp />} />
          <Route path="/thank-you" element={<Thankyou />} />
          <Route path="/congratulation" element={<Congratulation />} />
        </Route>
      </Routes>
      <Routes>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
