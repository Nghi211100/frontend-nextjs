import React, { useState } from "react";

const Todo = ({ work, handleupdateStatus, removeWork, updateName, index }) => {
  const [getvalueComplete, setValueComplete] = useState(work.complete);
  const [edit, setEdit] = useState(false);
  const [valueName, setValueName] = useState(work.name);
  const handleClick = (id) => {
    handleupdateStatus(id, getvalueComplete);
  };

  const handleClickRemove = (id) => {
    removeWork(id);
  };
  const handleClickSave = (id) => {
    valueName ? updateName(id, valueName) : alert("Please enter name!");
  };
  return (
    <div className="flex w-[97%] md:w-3/4 items-center mx-auto">
      <div
        className={
          getvalueComplete == true
            ? "flex w-[95%] md:w-[90%] justify-between items-center mx-auto shadow rounded px-2 py-1 m-2 bg-cyan-50"
            : "flex w-[95%] md:w-[90%] justify-between items-center mx-auto shadow rounded px-2 py-1 m-2 bg-red-50"
        }
      >
        <div className="text-[13px]">{index + 1}</div>
        {edit == true ? (
          <>
            <input
              className="border rounded px-3 outline-none"
              type="text"
              value={valueName}
              onChange={(e) => setValueName(e.target.value)}
            />
          </>
        ) : (
          <div>{work.name}</div>
        )}

        <div
          className="text-[12px] text-gray-500 cursor-pointer"
          onClick={() => {
            handleClick(work.id), setValueComplete(!getvalueComplete);
          }}
        >
          {getvalueComplete == true ? "Completed" : "Uncomplete"}
        </div>
      </div>
      <div
        className="text-[13px] md:text-[15px] shadow rounded px-2 py-1 cursor-pointer mx-2 bg-green-300"
        onClick={
          edit == true
            ? () => {
                handleClickSave(work.id), setEdit(!edit);
              }
            : () => setEdit(!edit)
        }
      >
        {edit == true ? "Save" : "Edit"}
      </div>
      <div
        className="text-[12px] md:text-[15px] shadow rounded px-2 py-1 cursor-pointer bg-red-400"
        onClick={() => handleClickRemove(work.id)}
      >
        X
      </div>
    </div>
  );
};

export default Todo;
