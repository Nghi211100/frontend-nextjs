import React, { useState } from "react";

const AddTodo = ({ ButtonAdd }) => {
  const [workName, setWorkName] = useState("");
  const handleButtonAdd = () => {
    ButtonAdd(workName);
    setWorkName("");
  };
  const handleChangName = (value) => {
    setWorkName(value);
  };
  return (
    <div className="py-5">
      <input
        onChange={(e) => handleChangName(e.target.value)}
        className="border rounded mr-5 py-2 px-3"
        type="text"
        value={workName}
        placeholder="Enter new work in here!"
      />
      <button
        onClick={() => handleButtonAdd()}
        className="border rounded py-2 px-3 bg-green-500"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
