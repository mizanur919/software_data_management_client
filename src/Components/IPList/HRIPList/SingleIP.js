import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./SingleIP.css";

const SingleIP = ({ singleIP }) => {
  const { ConcernName, IP, Factory_Code } = singleIP;

  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);

  function myFunc() {
    setTimeout(() => {
      document.getElementById("btn-copied").style.display = "none";
    }, 3000);
  }

  // Return
  return (
    <div>
      <div className="bg-white p-6 shadow-md rounded-md">
        <h3 className="text-xl text-gray-800 font-semibold mb-3">
          {ConcernName}
        </h3>
        <input
          className="text-center"
          type="text"
          name=""
          id="ip-text"
          value={IP}
          onChange={({ target: { value } }) => setValue(value)}
        />
        <p className="mt-2 mb-4">Factory Code: {Factory_Code}</p>
        <CopyToClipboard text={IP} onCopy={() => setCopied(true)}>
          <button
            className="btn-copy text-lg font-semibold text-gray-700 bg-indigo-100 px-4 py-1 block mx-auto rounded-md"
            id="btn-copy"
            onClick={myFunc}
          >
            {copied ? <span id="btn-copied">Copied</span> : null}
            Copy IP
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default SingleIP;
