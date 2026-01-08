import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/collectionSlice'

const CollectionCard = ({item}) => {
    const dispatch=useDispatch()

    const removeCollectionBTN=(item)=>{
       dispatch(removeCollection(item))
        dispatch(removeToast())
    }
  return (
    <div className="bg-white  rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <div className="relative h-52  bg-black">
        <a href={item.url} className="h-full" target="_blank">
          {item.type === "photo" && (
            <img
              src={item.src}
              className="h-full w-full object-cover object-cente"
            />
          )}

          {item.type === "video" && (
            <video
              src={item.src}
              className="h-full w-full object-cover object-center"
              autoPlay
              loop
              muted
            />
          )}

          {item.type === "gif" && (
            <img
              src={item.src}
              className="h-full w-full object-cover object-center"
            />
          )}
        </a>

        <div
          className="
          absolute bottom-0 left-0 w-full
          px-5 py-3
          flex justify-between items-start gap-2
        "
        >
          <h3
            className="
            text-white text-lg capitalize font-semibold
            
           line-clamp-1
          "
          >
            {item.title}
          </h3>
          <button
            onClick={() =>removeCollectionBTN(item)}
            className="font-semibold bg-indigo-600 px-3 rounded cursor-pointer active:scale-95"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard