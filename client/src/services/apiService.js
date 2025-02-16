import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/users`;


export const fetchUsers = async () => {
  try {

    const response = await axios.get(API_URL);
    return {success: true, data: response.data};
    
  } catch (error) {
    console.error("Error fetching users:", error);
    return {success:false, data: []};
  }
};



export const createUser = async (user) => {
  try {

    const response = await axios.post(API_URL, user, {headers: {"Content-Type": "application/json" }});
    return {success: true, data: response.data};

  } catch (error) {
    console.error("Error creating user:", error.response?.data || error.message);
    
    return {
      success: false,
      errorMessage: error.response?.data?.message || "Unexpected error occurred",
      statusCode: error.response?.status || 500
    };
  }
};