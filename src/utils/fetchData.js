import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const config = {
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_RAPID_HOST,
  },
};

export const getData = async (url) => {
  const response = await axios.get(url, config);
  return response.data;
};
