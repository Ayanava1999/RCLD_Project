import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Form from "./components/Form";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import AddCources from "./components/cources/AddCources";
import IndividualCources from "./components/cources/IndividualCources";
import ShowFormall from "./components/Admin/ShowFormall";
import GiveRemarks from "./components/Admin/GiveRemarks";
import CourcesShowAll from "./components/Admin/CourcesShowAll";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content-container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/addcources" element={<AddCources/>}/>
              <Route path="/form" element={<Form />} />
              <Route path="/courecsdetails/:id" element={<IndividualCources />} />
              <Route path="/showformall" element={<ShowFormall />} />
              <Route path="/giveremarks/:id" element={<GiveRemarks />} />
              <Route path="/courcesall/" element={<CourcesShowAll />} />



            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
