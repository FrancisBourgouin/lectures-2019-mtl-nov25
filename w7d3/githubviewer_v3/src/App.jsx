import React, { useState } from "react";
import "./App.scss";
import Branches from "./components/Branches";
import Commits from "./components/Commits";
import Contributors from "./components/Contributors";

import { getBranches } from "./helpers/helper";
import { useGithubAPI } from "./helpers/useGithubAPI";

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
  const [repo, setRepo] = useState("windows-terminal-color-scheme-builder");
  const { branches, commits, owner } = useGithubAPI(repo, "FrancisBourgouin");

  return (
    <div className='App'>
      <h1>Welcome to the github commit & branch visualiser</h1>
      <form
        onSubmit={event => {
          event.preventDefault();
          setRepo(event.target.children[0].value);
        }}
      >
        <input name='repo' type='text'></input>
      </form>
      <Branches branches={branches} />
      <Contributors defaultName='John' />
      <Commits commits={commits} />
    </div>
  );
}

export default App;
