import React, { useState } from "react";
import CompanyList from "./CompanyList";
import "./App.css";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="Header">
        <input
          type="text"
          value={searchQuery}
          placeholder="Search"
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>
      <CompanyList searchQuery={searchQuery} />
    </>
  );
};

export default App;
