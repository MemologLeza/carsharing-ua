import { fetchAdvertsAPI } from '../../services/advertsAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const fetchAdverts = createAsyncThunk('adverts/fetchAdverts', async (page, { rejectWithValue }) => {
  try {
      const response = await fetchAdvertsAPI(page);
    return response;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});