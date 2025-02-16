import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/users`;


export const fetchUsers = async () => {
  try {

    const response = await axios.get(API_URL);
    return response.data;
    
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};


export const createUser = async (user) => {
  try {

    const response = await axios.post(API_URL, user, {headers: {"Content-Type": "application/json" }});
    return response;

  } catch (error) {
    console.error("Error creating user:", error.response?.data || error.message);
  }
};