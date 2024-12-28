import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import TermsOfService from "./Terms";
import PrivacyPolicy from "./PrivacyPolicy";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/terms' element={<TermsOfService />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
