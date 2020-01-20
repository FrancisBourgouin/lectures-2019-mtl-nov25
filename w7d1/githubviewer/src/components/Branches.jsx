import React from "react";

const Branches = props => {
  const { branches } = props;

  const listOfBranches =
    branches && branches.length ? (
      branches.map(branch => <h2>{branch.name}</h2>)
    ) : (
      <h2>Empty !</h2>
    );

  return (
    <section className='branches'>
      <h1>Branches</h1>
      {listOfBranches}
    </section>
  );
};
export default Branches;
