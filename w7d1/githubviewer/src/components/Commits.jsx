import React from "react";
import SingularCommit from "./SingularCommit";

const Commits = ({ commits }) => {
  const listOfCommits = commits.map(commit => (
    <SingularCommit
      name={commit.author.login}
      message={commit.commit.message}
      date={commit.commit.author.date}
    />
  ));
  return (
    <section className='commits'>
      <h2>Commits</h2>
      {listOfCommits}
    </section>
  );
};

export default Commits;
