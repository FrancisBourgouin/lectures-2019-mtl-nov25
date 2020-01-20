import React from "react";
import SingularCommit from "./SingularCommit";

const Commits = ({ commits }) => {
  const listOfCommits = commits.map((commit, index) => (
    <SingularCommit
      name={commit.author.login}
      message={commit.commit.message}
      date={commit.commit.author.date}
      key={index}
      index={index}
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
