import axios from "axios";

export const getBranches = (repo, callback) => {
  axios
    .get(`https://api.github.com/repos/FrancisBourgouin/${repo}/branches`)
    .then(response => {
      console.log(response.data);
      callback(response.data);
    });
};
