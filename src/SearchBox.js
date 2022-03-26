import React from "react";

const SearchBox = ({searchChange}) => {
  return (
    <div className="p-2 ">
      <input
        className="text-center text-black p-1 border-2 bg-lime-100 "
        type="search"
        placeholder="search robots"
        onChange = {searchChange}
      />
    </div>
  );
};

export default SearchBox;
