import React, { useState } from "react";
import "./App.scss";
import Branches from "./components/Branches";
import Commits from "./components/Commits";
import Contributors from "./components/Contributors";
import axios from "axios";
//importing default JSON files

import branchList from "./json/branches.json";
import masterCommits from "./json/master.json";
import { useEffect } from "react";

// API ADDRESS : https://api.github.com/repos/:owner/:repo/commits
// API ADDRESS : https://api.github.com/repos/:owner/:repo/branches

// FrancisBourgouin
// windows-terminal-color-scheme-builder
// lhl-12-w10d3

function App() {
  const [branches, setBranches] = useState([]);
  const [polling, setPolling] = useState(false);
  const [repo, setRepo] = useState("lhl-12-w10d3");

  const getBranches = repo => {
    axios
      .get(`https://api.github.com/repos/FrancisBourgouin/${repo}/branches`)
      .then(response => {
        console.log(response.data);
        setBranches(response.data);
        // [...branches, ...response.data]
      });
  };

  console.log("Hi i'm branches", branches);

  useEffect(() => {
    if (repo) {
      getBranches(repo);
    }
    // setInterval(() => setPolling(!polling), 5000);
  }, []);

  return (
    <div className='App'>
      <h1>Welcome to the github commit & branch visualiser</h1>
      <form
        onSubmit={event => {
          event.preventDefault();
          getBranches(repo);
        }}
      >
        <input
          type='text'
          name='repo'
          placeholder='Enter repo name'
          value={repo}
          onChange={event => setRepo(event.target.value)}
        ></input>
      </form>
      <Branches branches={branches} />
      <Contributors defaultName='John' />
      <Commits commits={masterCommits} />
    </div>
  );
}

export default App;
