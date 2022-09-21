import { API_URL } from "../../config/API";
import axios from "axios";

const API = API_URL + "donations";

export const getAllDonationsAPI = async () => {
  const response = await axios.get(API);
  return response?.data;
};

export const getDonationAPI = async (donationId) => {
  return await axios.get(API + `/${donationId}`);
};
