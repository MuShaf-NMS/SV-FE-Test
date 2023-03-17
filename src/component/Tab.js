import React, { useState } from "react";

function Tab({ headers = [], contents = [], className }) {
  const [active, setActive] = useState(0);
  return (
    <div className={`rounded p-3 bg-white ${className}`}>
      <div className="flex space-x-2 border-b border-gray-100">
        {headers.map((t, idx) => (
          <button
            key={idx}
            className={`px-2 ${
              idx === active ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setActive(idx)}
          >
            {t}
          </button>
        ))}
      </div>
      <div>
        {contents.map((c, idx) => (
          <div key={idx} className={`p-2 ${idx === active ? "" : "hidden"}`}>
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tab;
