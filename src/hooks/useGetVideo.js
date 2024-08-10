import { useEffect, useState } from "react";
import { y_url_popular } from "../utils/api_keys";

const useGetVideo = () => {
  const [fetchData, setFetchData] = useState(null);
  useEffect(() => {
    getFetchData();
  }, []);
  const getFetchData = async () => {
    const data = await fetch(y_url_popular);
    const json = await data.json();
    setFetchData(json);
    console.log(json);
    
  };
  return fetchData;
};
export default useGetVideo;
