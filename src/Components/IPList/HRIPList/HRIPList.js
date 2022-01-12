import React, { useState } from "react";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import "./HRIPList.css";
import SingleIP from "./SingleIP";

const HRIPList = () => {
  const [ipList, setIpList] = useState([]);

  // Fetching Data
  fetch("https://gentle-fjord-84231.herokuapp.com/iplist")
    .then((res) => res.json())
    .then((data) => setIpList(data));
  return (
    <div>
      <Header />
      <div>
        <div className="min-h-screen bg-indigo-50">
          <div className="container w-full md:px-40 mx-auto py-20">
            <h2 className="mt-6 mb-10 text-3xl">
              Four H HR &amp; Payroll Server PC Info
            </h2>
            <div className="md:grid lg:grid-cols-3 md:grid-cols-2 mlg:grid-cols-3 md:gap-10 space-y-6 md:space-y-0 px-10 md:px-0 mx-auto">
              {ipList.map((singleIP) => (
                <SingleIP key={singleIP._id} singleIP={singleIP}></SingleIP>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HRIPList;
