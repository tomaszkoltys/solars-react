import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/main";
import Offers from "./pages/offers";
import About from "./pages/about";
import Contact from "./pages/contact";
import Reviews from "./pages/reviews";
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
 
function App() {

const NavbarWithConditionalRendering = () => {
  
  const navbar={
    backgroundColor: "white",
};
  const location = useLocation();
  const navbarPaths = ["/oferta", "/onas", "/kontakt", "/opinie"];
  const shouldRenderNavbar = navbarPaths.includes(location.pathname);

  return shouldRenderNavbar ? <Navbar style={navbar}/> : null;
};

  return (
    <div className="App">
      <Router>
      <NavbarWithConditionalRendering/>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/oferta" element={<Offers />} />
            <Route path="/onas" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/opinie" element={<Reviews />} />
          </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
