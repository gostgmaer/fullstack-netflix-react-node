

import { baseurl, movieAPikey, moviebaseUrl } from "@/config/setting";
import axios from "axios";

export const serverMethod = async (endpint, params) => {
  const option = {
    method: params.method,
    url: baseurl + endpint,
    headers: {
      ...params.header,
    },
    params: params?.query,
    data: params?.data,
  };
  let response;
  let error;
  try {
    response = await axios.request(option);
  } catch (e) {
    error = e.response;
  }
  return response?.data ? response?.data : error;
};


export const servermovieApi = async (endpint, params) => {
  const option = {
    method: params.method,
    url: moviebaseUrl + endpint,
    headers: {
      ...params?.header,
    },
    params: { ...params?.query, api_key: movieAPikey },
    data: params?.data,
  };
  let response;
  let error;
  try {
    response = await axios.request(option);
  } catch (e) {
    error = e.response;
  }
  return response?.data ? response?.data : error;
};