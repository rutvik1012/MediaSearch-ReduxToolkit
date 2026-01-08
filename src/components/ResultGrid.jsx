import React, { useEffect } from "react";
import { fetchGIF, fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setQuery,
  setResults,
  setLoading,
  setError,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        // photos api call
        if (activeTab == "photos") {
          let response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnails: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
          // console.log(data);
        }
        // videos api call
        if (activeTab == "videos") {
          let response = await fetchVideos(query);
          // console.log(response.videos)
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnails: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
          // console.log(data);
        }
        // gif api callmkas
        if (activeTab == "gif") {
          let response = await fetchGIF(query);
          // console.log(response.results)
          data = response.results.map((item) => ({
            id: item.id,
            title: item.title || "GIF",
            type: "gif",
            thumbnails: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            url: item.url,
          }));
        }
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(null));
      }
    };
    getData();
  }, [query, activeTab,dispatch]);

  if (error) return <p>Error</p>;
  if (loading) return <h2>Loading...</h2>;
  return (
    <div className="w-full px-10 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {results.map((item, idx) => (
         
            <ResultCard key={idx} item={item} />
        
        ))}
      </div>
    </div>
  );
};

export default ResultGrid;
