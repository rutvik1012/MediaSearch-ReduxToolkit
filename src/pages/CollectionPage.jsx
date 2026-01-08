import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection, clearToast } from "../redux/features/collectionSlice";
const CollectionPage = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.collection.items);
  const clear=()=>{
    dispatch(clearCollection())
    dispatch(clearToast())
  }
  return (
    <div className="overflow-auto  w-full px-8 py-6">
      {collection.length > 0 ? (
        <div className="flex justify-between mb-5">
          <h2 className="text-3xl font-semibold">Your Collection</h2>
          <button
            onClick={() => clear()}
            className="active:scale-95 bg-red-500 text-sam transition px-6 py-1 rounded font-medium cursor-pointer"
            
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="text-xl font-semibold text-center ">
          Collection is Empty{" "}
        </h2>
      )}

      <div className="flex justify-start flex-wrap gap-6 overflow-auto  w-full px-10 py-6">
        {collection.map((item, idx) => (
          <div key={idx}>
            <CollectionCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
