import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./routes/home.jsx";
import ThankYou from "./components/ThankYou.jsx";
import axios from "./instance.js";
import Congratulations from "./components/Congratulations.jsx";

import Register from "./routes/register.jsx";
import Otp from "./routes/otp.jsx";
import Thankyou from "./routes/thank-you.jsx";
import { useEffect, useState } from "react";
import Congratulation from "./routes/Congratulation.jsx";
import TermsCondition from "./components/TermsCondition.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";

const AppRouter = () => {
  const [userCount, setuserCount] = useState(1000);
  const userCountCalculation = async () => {
    const response = await axios.get("/user/user-count");

    if (response.status === 200) {
      setuserCount(userCount + response.data.msg);
    }
  };

  useEffect(() => {
    userCountCalculation();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home userCount={userCount} />} />
          {/* <Route path="/thank-you" element={<ThankYou />} /> */}
          <Route
            path="/congratulations"
            element={<Congratulations userCount={userCount} />}
          />
          <Route
            path="/register"
            element={<Register userCount={userCount} />}
          />
          <Route path="/verify-otp" element={<Otp userCount={userCount} />} />
          <Route
            path="/thank-you"
            element={<Thankyou userCount={userCount} />}
          />
          <Route
            path="/congratulation"
            element={<Congratulation userCount={userCount} />}
          />
        </Route>
      </Routes>
      <Routes>
        <Route path="/terms-and-conditions" element={<TermsCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
