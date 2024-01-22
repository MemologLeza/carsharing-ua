import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from '../thunks/advertsThunks';
const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    list: [],
    currentPage: 1,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    setAdverts: (state, action) => {
      state.list = [...state.list, ...action.payload];
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = [...state.list, ...action.payload];
        state.currentPage += 1;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setAdverts, setCurrentPage, setStatus, setError } = advertsSlice.actions;
export default advertsSlice.reducer;