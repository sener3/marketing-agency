import { BrowserRouter as Router, Route } from "react-router-dom";

import "./style/style.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Team from "./pages/Team";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Route exact path="/marketing-agency" component={HomePage} />
        <Route exact path="/marketing-agency/about" component={AboutUs} />
        <Route exact path="/marketing-agency/contact" component={ContactUs} />
        <Route exact path="/marketing-agency/team" component={Team} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
