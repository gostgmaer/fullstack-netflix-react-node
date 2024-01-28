// utils/axiosApi.js
// import axios from "axios";

import { baseurl, movieAPikey, moviebaseUrl } from "@/config/setting";
import axios from "axios";

import Cookies from "js-cookie";
import instance from "./interceptors";

export const get = async (endpint, query) => {

  const tokens = getCookiesData()

  const option = {
    method: "get",
    url: baseurl + endpint,
    headers: {
      Authorization: tokens.token,
      session_id: tokens.session,
    },
    params: query,
  };
  let response;
  let error;
  try {
    response = await instance.request(option);

  } catch (e) {
    error = e.response.data;


    throw new Error(JSON.stringify(e.response.data));
  }
  return response?.data ? response?.data : error; // or set initial value
};

export const getsingle = async (endpint, id, query) => {
  const tokens = getCookiesData()

  const option = {
    method: "get",
    url: baseurl + endpint + `/${id}`,
    headers: {
      Authorization: tokens.token,
      session_id: tokens.session,
    },
    params: query,
  };
  let response;
  let error;
  try {
    response = await instance.request(option);
  } catch (e) {
    error = e.response.data;
    throw new Error(JSON.stringify(e.response.data));
  }
  return response?.data ? response?.data : error; // or set initial value
};


export const post = async (endpint, data) => {
  const tokens = getCookiesData()

  const option = {
    method: "post",
    url: baseurl + endpint,
    headers: {
      Authorization: tokens.token,
      session_id: tokens.session,
    },
    params: {},
    data: data,
  };
  let response;
  let error;
  try {
    response = await instance.request(option);

  } catch (e) {
    error = e.response.data;

    throw new Error(JSON.stringify(e.response.data));
  }

  // if success return value
  return response?.data ? response?.data : error; // or set initial value
};



export const patch = async (endpint, data, id) => {
  const tokens = getCookiesData()

  const option = {
    method: "patch",
    url: baseurl + endpint + `/${id}`,
    headers: {
      Authorization: tokens.token,
      session_id: tokens.session,
    },
    params: {},
    data: data,
  };
  let response;
  let error;
  try {
    response = await instance.request(option);

  } catch (e) {
    error = e.response.data;

    throw new Error(JSON.stringify(e.response.data));
  }
  return response?.data ? response?.data : error; // or set initial value
};

export const del = async (endpint, id) => {
  const tokens = getCookiesData()


  const option = {
    method: "delete",
    url: baseurl + endpint + `/${id}`,
    headers: {
      Authorization: tokens.token,
      session_id: tokens.session,
    },
    params: {},
    data: {},
  };
  let response;
  let error;
  try {
    response = await instance.request(option);

  } catch (e) {
    error = e.response.data;

    throw new Error(JSON.stringify(e.response.data));
  }
  return response?.data ? response?.data : error; // or set initial value
};



export const getmovies = async (endpint, query) => {

 
  const option = {
    method: "get",
    url: moviebaseUrl + endpint,
    headers: {
    },
    params: { ...query, api_key: movieAPikey },
  };
  let response;
  let error;
  try {
    response = await instance.request(option);

  } catch (e) {
    error = e.response.data;


    throw new Error(JSON.stringify(e.response.data));
  }
  return response?.data ? response?.data : error; // or set initial value
};


export const getsinglemovie = async (endpint, id, query) => {
  const option = {
    method: "get",
    url: moviebaseUrl + endpint + `/${id}`,
    headers: {
     
    },
    params: { ...query, api_key: movieAPikey },
  };
  let response;
  let error;
  try {
    response = await instance.request(option);
  } catch (e) {
    error = e.response.data;
    throw new Error(JSON.stringify(e.response.data));
  }
  return response?.data ? response?.data : error; // or set initial value
};













const getCookiesData = (second) => {
  const cookiesData = Cookies.get();
  const token = "Bearer " + cookiesData["headerPayload"] + "." + cookiesData["signature"];
  const session = cookiesData["session"];

  return {
    token, session
  }
}