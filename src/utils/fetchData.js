import axios from "axios";
axios.defaults.baseURL = "https://exercisedb.p.rapidapi.com";
const config = {
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const getData = async (url) => {
  const response = await axios.get(url, config);
  return response.data;
};
