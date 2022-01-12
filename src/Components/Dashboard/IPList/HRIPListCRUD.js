import React, { useState } from "react";
import axios from "axios";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import "./HRIPListCRUD.css";

const HRIPListCRUD = () => {
  const [data, setData] = useState([]);
  const [concernName, setConcernName] = useState("");
  const [newIP, setNewIP] = useState("");
  const [factoryCode, setFactoryCode] = useState("");

  // Load All Data
  const loadAllData = () => {
    fetch("http://localhost:5000/iplist")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  // Clear Text Field
  const reset = () => {
    setConcernName("");
    setNewIP("");
    setFactoryCode("");
  };

  loadAllData();

  // Create New Data
  const postData = (e) => {
    fetch("http://localhost:5000/ipList/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ConcernName: concernName,
        IP: newIP,
        Factory_Code: factoryCode,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Data Inserted Successfully");
          loadAllData();
        } else {
          alert("Something went wrong");
        }
      });
    e.preventDefault();
  };

  // Delete Data
  const deleteData = (id) => {
    const url = `http://localhost:5000/ipList/${id}`;
    if (window.confirm("Are you sure?")) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Deleted");
            loadAllData();
          } else {
            alert("Something went wrong");
          }
        });
    }
  };
  return (
    <>
      <Header />
      <div>
        <div className="md:min-h-screen bg-neutral-50">
          <div className="container w-full mx-auto py-20">
            <h1 className="text-3xl mb-8 text-gray-800 text-center">
              Add New Four H HR &amp; Payroll Info
            </h1>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div>
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3 md:mb-0">
                      <input
                        className="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Concern Name"
                        onChange={(e) => setConcernName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3 md:mb-0">
                      <input
                        className="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="IP Address"
                        onChange={(e) => setNewIP(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3 md:mb-0">
                      <input
                        className="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Factory Code"
                        onChange={(e) => setFactoryCode(e.target.value)}
                      />
                    </div>
                  </div>
                  <button
                    class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    onClick={postData}
                  >
                    Add
                  </button>
                </form>
              </div>
              <div>
                <table class="min-w-full divide-y">
                  <thead class="bg-indigo-200">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Concern Name
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        IP Address
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Factory Code
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    {data.map((singleData) => (
                      <tr key={singleData._id}>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900">
                            {singleData.ConcernName}
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900">
                            {singleData.IP}
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900">
                            {singleData.Factory_Code}
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-yellow-500 mr-3"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                              <path
                                fill-rule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>
                          <button onClick={() => deleteData(singleData._id)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-red-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HRIPListCRUD;
