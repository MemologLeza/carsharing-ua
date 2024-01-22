import { addToFavourites as addToFavouritesAction, removeFromFavourites as removeFromFavouritesAction } from '../favorites/favoritesSlice';

export const addToFavourites = (advert) => (dispatch) => {
  dispatch(addToFavouritesAction(advert));
};

export const removeFromFavourites = (advert) => (dispatch) => {
  dispatch(removeFromFavouritesAction(advert));
};