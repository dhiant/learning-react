import React from "react";

const card = (props) => {
  return (
    <div className="bg-emerald-300 inline-block hover:scale-105 m-2  text-center shadow-lime-400 shadow-md rounded-md">
      <img
        src={`https://robohash.org/${props.id}?size=200x200`}
        alt="robots"
      ></img>
      <div>
        <strong>{props.name}</strong>
        <p>{props.email}</p>
      </div>
    </div>
  );
};
export default card;
