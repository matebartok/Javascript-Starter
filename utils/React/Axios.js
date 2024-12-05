// install 
// npm install axios

// Axios Setup (Axios Instance)
// src/utils/axiosInstance.js
import axios from 'axios';

// Create an Axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Change this to your API's base URL
  timeout: 5000, // Timeout after 5 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

// Making GET Requests
// src/api/fetchData.js
import axiosInstance from '../utils/axiosInstance';

export const fetchData = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data; // Return the response data
  } catch (error) {
    // Handle errors (e.g., network issues, server errors)
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to be handled elsewhere
  }
};

// Making POST Requests
// src/api/createData.js
import axiosInstance from '../utils/axiosInstance';

export const createData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error posting data:', error);
    throw error; // Rethrow the error
  }
};


// Request Interceptors
// src/utils/axiosInstance.js
// Adding Authorization Token to Request Headers
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 5000, // Request timeout in ms
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from local storage or some other secure place
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config; // Important to return the config after modification
  },
  (error) => {
    // Handle request errors (e.g., network issues)
    return Promise.reject(error); // Always reject the error
  }
);

export default axiosInstance;



// Response Interceptors
// src/utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Modify the response globally if needed
    // For example, check if we want to transform data
    if (response.data && response.data.success) {
      // You can process data here (e.g., filter or modify)
      return response.data; // Returning only the necessary data
    }
    return response; // In case no transformation is required
  },
  (error) => {
    // Handle different types of errors
    if (error.response) {
      // The server responded with a status code that falls out of the range of 2xx
      console.error('Error Response:', error.response);
      if (error.response.status === 401) {
        // Handle unauthorized access
        alert('Session expired! Please log in again.');
      } else if (error.response.status === 500) {
        // Handle server errors
        alert('Internal server error. Please try again later.');
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error Request:', error.request);
    } else {
      // Something else happened
      console.error('General Error:', error.message);
    }
    // Return a rejected promise to continue with error handling
    return Promise.reject(error);
  }
);

export default axiosInstance;
