import React, { useState, useEffect } from "react";
import Axios from "axios";

export const useGithubAPI = (repository, owner) => {
  const [branches, setBranches] = useState([]);
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    Promise.all([
      Axios.get(`https://api.github.com/repos/${owner}/${repository}/branches`),
      Axios.get(`https://api.github.com/repos/${owner}/${repository}/commits`)
    ]).then(response => {
      console.log(response);
      setBranches(response[0].data);
      setCommits(response[1].data);
    });
  }, [repository, owner]);

  return { branches, commits, owner };
};
