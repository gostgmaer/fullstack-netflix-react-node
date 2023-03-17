import React, { useContext, useState, useEffect } from "react";
import InvokeAPI, { cleanQueryparam } from "../utils/axiosSetup";
import { generateRandomInteger } from "../utils/custom/CustomFunctions";
const AppContext = React.createContext(null);

const AppProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [openModal, setOpenModal] = useState(true);
  const [movieID, setMovieID] = useState(null);
  const [infoMovie, setInfoMovie] = useState(null);
  const [similar, setSimilar] = useState(null);
  const [trending, setTrending] = useState(null);
  const [playingNow, setPlayingNow] = useState(null);
  const [credits, setCredits] = useState(null);
  const [latestMovie, setLatestMovie] = useState(null);
  const [popular, setPopular] = useState(null);
  const [topRatedMovie, setTopRatedMovie] = useState(null);
  const [upcommingMovie, setUpcommingMovie] = useState(null);
  const [featureMovie, setFeatureMovie] = useState(null);
  const [discoverData, setdiscoverData] = useState(null);
  const [contentType, setContentType] = useState('tv');
  const [searchData, setSearchData] = useState(null);

  const showHideModal = () => {
    setModal(!modal);
  };


  const fetchSingle = async (id) => {
    setLoader(true)
    const query = { language: "en-US", append_to_response: 'videos,images' };
    cleanQueryparam(query);
    const res = await InvokeAPI(`${contentType}/${id}`, "get", {}, {}, query);
    setFeatureMovie(res);
    setLoader(false)
  };

  const fetchDiscover = async () => {
    setLoader(true)
    console.log(generateRandomInteger(2, 100));
    const query = {
      language: "en-US",
      append_to_response: null,
      page: generateRandomInteger(2, 100),
    };
    cleanQueryparam(query);
    const res = await InvokeAPI(`discover/${contentType}`, "get", {}, {}, query);
    fetchSingle(
      (res?.results[Math.floor(Math.random() * res?.results?.length)]).id
    );
    setLoader(false)
  };


  const getTrendingMovie = async (id) => {
    setLoader(true);
    try {
      const query = { language: "en-US", append_to_response: null, page: 1 };
      cleanQueryparam(query);
      const res = await InvokeAPI(`trending/${contentType}/week`, "get", {}, {}, query);
      setTrending(res);
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };
  const getPlayingNow = async (id) => {
    if (contentType === 'movie') {
      setLoader(true);
      try {
        const query = { language: "en-US", append_to_response: null, page: 1 };
        cleanQueryparam(query);
        const res = await InvokeAPI(`${contentType}/now_playing`, "get", {}, {}, query);
        setPlayingNow(res);
      } catch (error) {
        console.log(error);
      }
      setLoader(false);
    }
  };
  const getSimilarMovie = async (id) => {
    try {
      const query = { language: "en-US", append_to_response: null, page: 1 };
      cleanQueryparam(query);
      const res = await InvokeAPI(`${contentType}/${id}/similar`, "get", {}, {}, query);
      setSimilar(res);
    } catch (error) {
      console.log(error);
    }
  };
  const getCastAndCrew = async (id) => {
    try {
      const query = { language: "en-US" };
      cleanQueryparam(query);
      const res = await InvokeAPI(`${contentType}/${id}/credits`, "get", {}, {}, query);

      setCredits(res);
    } catch (error) {
      console.log(error);
    }
  };
  const getMovieInfo = async (id) => {
    setLoader(true);
    try {
      const query = { language: "en-US", append_to_response: 'videos,images' };
      cleanQueryparam(query);
      const res = await InvokeAPI(`${contentType}/${id}`, "get", {}, {}, query);
      getSimilarMovie(res.id);
      getCastAndCrew(res.id);
      setInfoMovie(res);
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };
  const getLatestMovie = async () => {
    setLoader(true);
    try {
      const query = { language: "en-US", page: 1 };
      cleanQueryparam(query);
      const res = await InvokeAPI(`${contentType}/${contentType === 'tv' ? 'airing_today' : 'latest'}`, "get", {}, {}, query);
      setLatestMovie(res);
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };
  const getPopularMovie = async () => {
    setLoader(true);
    try {
      const query = { language: "en-US", page: 1 };
      cleanQueryparam(query);
      const res = await InvokeAPI(`${contentType}/popular`, "get", {}, {}, query);
      setPopular(res);
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };
  const getTopRatedMovie = async () => {
    setLoader(true);
    try {
      const query = { language: "en-US", page: 1 };
      cleanQueryparam(query);
      const res = await InvokeAPI(`${contentType}/top_rated`, "get", {}, {}, query);
      setTopRatedMovie(res);
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };
  const getupcomingMovie = async () => {
    setLoader(true);
    try {
      const query = { language: "en-US", page: 1 };
      cleanQueryparam(query);
      const res = await InvokeAPI(`${contentType}/${contentType === 'tv' ? 'on_the_air' : 'upcoming'}`, "get", {}, {}, query);
      setUpcommingMovie(res);
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };
  const GetgaterogywiseMovie = async (grnre) => {
    setLoader(true);
    const query = { language: "en-US", page: 1, with_genres: grnre };
    cleanQueryparam(query);
    const res = await InvokeAPI(`discover/${contentType}`, "get", {}, {}, query);
    // res.results.filter((item)=>item.backdrop_path!==null || item.poster_path!==null)
    setLoader(false);
    return res

  }

  return (
    <AppContext.Provider
      value={{
        modal,
        showHideModal,
        loader,
        setLoader,
        getMovieInfo,
        infoMovie,
        credits,
        similar,
        getTrendingMovie,
        trending,
        getPlayingNow,
        playingNow,
        getLatestMovie,
        latestMovie,
        getupcomingMovie,
        upcommingMovie,
        getPopularMovie,
        popular, openModal,
        getTopRatedMovie,
        topRatedMovie, GetgaterogywiseMovie, setModal, featureMovie, fetchDiscover, fetchSingle, contentType, setContentType
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
