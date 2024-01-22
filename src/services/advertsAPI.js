import axios from 'axios';

const baseURL = 'https://65abbe9bfcd1c9dcffc6f4e5.mockapi.io/api/adverts'; 

const api = axios.create({
  baseURL,
});

export const fetchAdvertsAPI = async (page) => {
  try {
    const response = await api.get('', { params: { page, limit: 12 } });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching adverts:', error);
    throw error;
  }
};
