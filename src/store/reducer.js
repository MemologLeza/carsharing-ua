import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import advertsReducer from './adverts/advertsSlice';
import favouritesReducer from './favorites/favoritesSlice';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favourites'], 
};

const reducer = combineReducers({
  adverts: advertsReducer,
  favourites: favouritesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default persistedReducer;