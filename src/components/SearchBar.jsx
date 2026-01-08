import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex p-5 w-full gap-4 bg-(--c1) text-white "
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="border-2 px-2 py-2 w-full text-xl rounded"
          placeholder="Search anything"
        />
        <button className="border-2 px-2 py-2 text-xl rounded active:scale-95">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
