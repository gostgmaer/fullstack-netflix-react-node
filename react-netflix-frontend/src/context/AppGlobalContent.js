import React, { useContext, useState, useEffect } from "react";
import InvokeAPI, { cleanQueryparam } from "../utils/axiosSetup";
const AppContext = React.createContext(null);

const AppProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [loader, setLoader] = useState(false);
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

  const showHideModal = () => {
    setModal(!modal);
  };
  const getTrendingMovie = async (id) => {
    setLoader(true);
    try {
      const query = { language: "en-US", append_to_response: null, page: 1 };
      cleanQueryparam(query);
      const res = await InvokeAPI(`trending/all/week`, "get", {}, {}, query);
      setTrending(res);
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };
  const getPlayingNow = async (id) => {
    setLoader(true);
    try {
      const query = { language: "en-US", append_to_response: null, page: 1 };
      cleanQueryparam(query);
      const res = await InvokeAPI(`movie/now_playing`, "get", {}, {}, query);
      setPlayingNow(res);
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };
  const getSimilarMovie = async (id) => {
    try {
      const query = { language: "en-US", append_to_response: null, page: 1 };
      cleanQueryparam(query);
      const res = await InvokeAPI(`movie/${id}/similar`, "get", {}, {}, query);
      setSimilar(res);
    } catch (error) {
      console.log(error);
    }
  };
  const getCastAndCrew = async (id) => {
    try {
      const query = { language: "en-US" };
      cleanQueryparam(query);
      const res = await InvokeAPI(`movie/${id}/credits`, "get", {}, {}, query);

      setCredits(res);
    } catch (error) {
      console.log(error);
    }
  };
  const getMovieInfo = async (id) => {
    setLoader(true);
    try {
      const query = { language: "en-US", append_to_response: null };
      cleanQueryparam(query);
      const res = await InvokeAPI(`movie/${id}`, "get", {}, {}, query);
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
      const query = { language: "en-US",  page: 1 };
      cleanQueryparam(query);
      const res = await InvokeAPI(`movie/latest`, "get", {}, {}, query);
      setLatestMovie(res);
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  }
  const getPopularMovie = async () => {
    setLoader(true);
    try {
      const query = { language: "en-US", page: 1 };
      cleanQueryparam(query);
      const res = await InvokeAPI(`movie/popular`, "get", {}, {}, query);
      setPopular(res);
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  }
  const getTopRatedMovie = async () => {
    setLoader(true);
    try {
      const query = { language: "en-US", page: 1 };
      cleanQueryparam(query);
      const res = await InvokeAPI(`movie/top_rated`, "get", {}, {}, query);
      setTopRatedMovie(res);
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  }
  const getupcomingMovie = async () => {
    setLoader(true);
    try {
      const query = { language: "en-US", page: 1 };
      cleanQueryparam(query);
      const res = await InvokeAPI(`movie/upcoming`, "get", {}, {}, query);
      setUpcommingMovie(res);
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
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
        getLatestMovie,latestMovie,getupcomingMovie,upcommingMovie,getPopularMovie,popular,getTopRatedMovie,topRatedMovie
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
