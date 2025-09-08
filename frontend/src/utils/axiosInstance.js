import axios from "axios";

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

 
 

// Response interceptor for handling errors
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response.data; // Return only the data from the response
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let errorMessage = 'An error occurred';
    
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const { status, data } = error.response;
      
      switch (status) {
        case 400:
          errorMessage = data.message || 'Bad request';
          break;
        case 401:
          errorMessage = 'Unauthorized access';
          // Redirect to login or refresh token
          break;
        case 403:
          errorMessage = 'Forbidden';
          break;
        case 404:
          errorMessage = 'Requested resource not found';
          break;
        case 500:
          errorMessage = 'Internal server error';
          break;
        default:
          errorMessage = data.message || `Error: ${status}`;
      }
    } else if (error.request) {
      // The request was made but no response was received
      if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request timeout. Please try again.';
      } else {
        errorMessage = 'No response from server. Please check your connection.';
      }
    } else {
      // Something happened in setting up the request that triggered an Error
      errorMessage = error.message || 'Network error';
    }

    // You can show a toast notification here or handle it in the component
    console.error('API Error:', errorMessage);
    
    // Return a rejected promise with the error message
    return Promise.reject({
        message : error.response?.data?.message || errorMessage.message || "Unknown error occurred",
        status : error.response?.status,
        data : error.response?.data,
    })
  }
);

export default axiosInstance;

