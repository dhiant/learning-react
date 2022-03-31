import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="p-2 ">
      <input
        className="text-center placeholder-black p-1 border-2 bg-emerald-300 border-emerald-300 focus:outline-none focus:ring-1 focus:border-lime-500"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
