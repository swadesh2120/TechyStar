import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/app.scss"
import Header from "../../myapp1/src/components/Header";
import Home from "../../myapp1/src/components/Home";
import Contact from "../../myapp1/src/components/Contact"
import Services from "../../myapp1/src/components/Services";
import Footer from "../../myapp1/src/components/Footer";
import "./styles/mediaQueries.scss"

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
