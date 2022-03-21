import React from "react";

const card = (props) => {
  const { id, name, email } = props;
  return (
    <div className=" bg-lime-400 inline-block hover:scale-105 m-2  text-center shadow-lime-500 shadow-lg rounded-md">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots"></img>
      <div>
        <strong>{name}</strong>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default card;
