import "./App.css";
import Home from "./Components/Home/Home/Home";
import About from "./Components/About/About";
import HRIPList from "./Components/IPList/HRIPList/HRIPList";
import WMSIPList from "./Components/IPList/WMSIPList/WMSIPList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HRIPListCRUD from "./Components/Dashboard/IPList/HRIPListCRUD";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hriplist" element={<HRIPList />} />
          <Route path="/wmsiplist" element={<WMSIPList />} />
          <Route path="/addnewhrinfo" element={<HRIPListCRUD />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
