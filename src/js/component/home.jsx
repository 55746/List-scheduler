import React, { useState } from "react";

const Home = () => {
  const [item, setItem] = useState("");
  const [todolist, setTodolist] = useState([""]);
  const onRemove = (e) => {
    setTodolist(todolist.filter((todolist) => todolist !== item));
  };
  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          onChange={(e) => setItem(e.target.value)}
        />

        <a
          onClick={() => {
            // setIte;
            setTodolist([...todolist, item]);
            console.log(item);
          }}
          type="btn btn-primary"
          className="input-group-text"
          id="basic-addon1"
        >
          Button
        </a>
      </div>
      <ul>
        {todolist.map((item, uniquekeyname) => (
          <>
            <li key={uniquekeyname}>
              <div>{item}</div>
            </li>
            <button onClick={onRemove(uniquekeyname)}>delete</button>
          </>
        ))}
      </ul>
      <span>{todolist.length + " items"}</span>
    </div>
  );
};

export default Home;
