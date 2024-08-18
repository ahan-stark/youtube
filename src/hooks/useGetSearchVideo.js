import { useEffect, useState } from "react";
import { y_search_videos } from "../utils/api_keys";

const useGetSearchVideo = (props) => {  
  const [results, setResults] = useState(null);
  const fetchResult = async () => {
    const str = y_search_videos.replace("YOURKEYWORD",props);
    const data = await fetch(str);
    const json = await data.json();
    setResults(json);
  };
  useEffect(() => {
    fetchResult();
  }, []);
  return results;
};
export default useGetSearchVideo;
