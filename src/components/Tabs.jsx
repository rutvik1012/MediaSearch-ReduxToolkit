import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gif"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);
  return (
    <div className="flex gap-5 p-10 justify-center">
      {tabs.map((item, idx) => (
        <button
          key={idx}
          className={`${
            activeTab == item ? "bg-blue-600" : "bg-gray-600"
          } transition px-5 py-1 rounded uppercase cursor-pointer active:scale-95 text-white`}
          onClick={() => {
            dispatch(setActiveTab(item));
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
