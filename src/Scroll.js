import React from "react";

const scroll = (props) => {
  return (
    <div className="overflow-y-auto h-72 border-solid border-2 border-sky-500 .">
      {props.children}
    </div>
  );
}

export default scroll;