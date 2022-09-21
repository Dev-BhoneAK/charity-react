import { API_URL } from "../../config/API";
import axios from "axios";

const API = API_URL + "events";

export const getAllEventsAPI = async () => {
  const response = await axios.get(API);
  return response?.data;
};

export const getEventAPI = async (eventId) => {
  return await axios.get(API + `/${eventId}`);
};
