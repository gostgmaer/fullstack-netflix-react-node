import axios from "axios";
import { baseURL, queryString, token } from "../../services/settings";

const InvokeAPI = async (
  endpoint,
  type,
  body,
  headerParams,
  query
) => {


  const headerObj = { Authorization: `bearer ${token}` }
  const option = {
    method: type,
    url: baseURL + endpoint,
    headers: { ...headerObj, ...headerParams },
    params: { ...queryString, ...query },
    data: body,
  };
  let response;
  console.log(option);
  try {
    response = await axios.request(option);
  } catch (e) {
    throw new Error(e.message);
  }

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