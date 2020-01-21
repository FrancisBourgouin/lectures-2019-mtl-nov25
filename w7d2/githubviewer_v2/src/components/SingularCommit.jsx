import React from "react";
const SingularCommit = ({ name, message, date, index }) => {
  return (
    <article className='commit'>
      <h1>{name}</h1>
      <h2>{message}</h2>
      <h3>{date}</h3>
      <i>{index}</i>
    </article>
  );
};
export default SingularCommit;
