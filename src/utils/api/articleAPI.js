import { API_URL } from "../../config/API";
import axios from "axios";

const API = API_URL + "articles";

export const getAllArticlesAPI = async () => {
  const response = await axios.get(API);
  return response?.data;
};

export const getArticleAPI = async (articleId) => {
  return await axios.get(API + `/${articleId}`);
};
