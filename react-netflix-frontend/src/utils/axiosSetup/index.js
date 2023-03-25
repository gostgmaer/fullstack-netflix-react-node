import axios from "axios";
import { baseURL, loginURL, queryString } from "../../services/settings";

const InvokeAPI = async (
  endpoint,
  type,
  body,
  headerParams,
  query
) => {


  // const headerObj = { Authorization: `bearer ${token}` }
  const option = {
    method: type,
    url: endpoint.startsWith('api/') ? loginURL+endpoint : baseURL + endpoint,
    headers: headerParams,
    params: endpoint.startsWith('api/') ? {} : { ...queryString, ...query },
    data: body,
  };
  let response;
  try {
    response = await axios.request(option);
  } catch (e) {
    throw new Error(e.message);
  }
console.log('Data');
  // if success return value
  return response?.data ? response?.data : null; // or set initial value
};
export default InvokeAPI;


export const cleanQueryparam = (query) => {
  return Object.keys(query).forEach(
    (key) =>
      (query[key] === "" || query[key] == null || query[key] === undefined) &&
      delete query[key]
  );
};