import React, { useState, useEffect } from "react";
import SingularContributor from "./SingularContributor";

const Contributors = ({ defaultName }) => {
  const [name, setName] = useState(defaultName);
  const [task, setTask] = useState("");
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    console.log("Contributor partay", contributors);
  }, [contributors]);

  useEffect(() => {
    // setTimeout(() => alert("chicken", 1000));
  }, []);

  const addContributor = event => {
    event.preventDefault();

    return setContributors([
      ...contributors,
      <SingularContributor name={name} task={task} setName={setName} />
    ]);
  };

  return (
    <section className='contributors'>
      <h2>Contributors</h2>
      <form onSubmit={addContributor}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <input
          type='text'
          name='task'
          placeholder='Task Description'
          value={task}
          onChange={event => setTask(event.target.value)}
        />
        <input type='submit' value='Add' />
      </form>
      {contributors}
    </section>
  );
};
export default Contributors;
