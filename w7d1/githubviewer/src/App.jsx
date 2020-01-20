import React, { useState } from "react";
import "./App.scss";
import Branches from "./components/Branches";
import Commits from "./components/Commits";
import Contributors from "./components/Contributors";

//importing default JSON files

import branchList from "./json/branches.json";
import masterCommits from "./json/master.json";

function App() {
  const [branches, setBranches] = useState(branchList);

  return (
    <div className='App'>
      <h1>Welcome to the github commit & branch visualiser</h1>
      <Branches branches={branches} />
      <Contributors defaultName='John' />
      <Commits commits={masterCommits} />
    </div>
  );
}

export default App;
