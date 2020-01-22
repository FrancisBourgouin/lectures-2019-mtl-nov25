import React from "react";
const SingularContributor = props => {
  const { name, task, setName } = props;
  return (
    <article>
      <h1 onClick={() => setName("Little Chicken")}>{name}</h1>
      <h2>{task}</h2>
    </article>
  );
};
export default SingularContributor;
