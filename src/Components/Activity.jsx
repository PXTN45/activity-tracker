/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";

const Activity = ({ id, name, duration }) => {
  const dispatch = useDispatch();
  const deleteActivity = () => {
    dispatch({
      type: "DELETE_ACTIVITY",
      payload: {
        id: id,
      },
    });
  };
  return (
    <div className="section">
      <p>
        <b>Activity : {name}</b>
        <b> Duration : {duration}</b>
        <button onClick={deleteActivity}>Delete</button>
      </p>
    </div>
  );
};

export default Activity;
