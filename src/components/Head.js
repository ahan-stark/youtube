import React, { useEffect, useState } from "react";
import yLogo from "../utils/youtube.png";
import hamBurger from "../utils/hamburger.png";
import userLogo from "../utils/user.png";
import { useDispatch } from "react-redux";
import { toggleIsMenu } from "../store/appSlice";
import { y_auto_complete } from "../utils/api_keys";
import { Link, useNavigate } from "react-router-dom";

const Head = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const getSearchSuggestions = async () => {
    const data = await fetch(y_auto_complete + searchQuery);
    const json = await data.json();
    setSearchResult(json[1].slice(0, 6));
  };
  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch(toggleIsMenu());
  };
  const navigetToHome = () => {
    navigate("/");
  };
  const searchThis = () => {
    if (searchQuery.length !== 0) navigate("/search?value=" + searchQuery);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col py-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          src={hamBurger}
          alt="☹️"
          className="h-5 cursor-pointer"
          onClick={toggleMenu}
        />
        <div
          className="cursor-pointer"
          onClick={() => {
            navigetToHome();
          }}
        >
          <img src={yLogo} alt="☹️" className="h-7 -mt-2 mx-4" />
        </div>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            placeholder="search here"
            className="w-[50%] border border-gray-600 rounded-xl mr-1 p-2"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => {
              setShowSearchResult(true);
            }}
            onBlur={() => {
              setTimeout(() => {
                setShowSearchResult(false);
              }, 500);
            }}
          />
          <button
            className="p-2 ml-2 h-[2.6em] border border-red-600 rounded-xl bg-red-500 text-white"
            onClick={() => {
              searchThis();
            }}
          >
            Search
          </button>
        </div>
        {showSearchResult && (
          <div className="fixed bg-white py-2 px-5 w-[30rem] shadow-lg rounded-lg">
            <ul>
              {searchResult.map((res, index) => {
                return (
                  <Link to={"/search?value=" + res} key={index}>
                    <li
                      className="py-2 shadow-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSearchQuery(res);
                      }}
                    >
                      {res}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img src={userLogo} alt="☹️" className="h-7" />
      </div>
    </div>
  );
};

export default Head;
