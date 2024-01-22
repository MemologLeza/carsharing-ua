import React, { useEffect, useState } from "react";
import "../../pages/CatalogPage/CatalogPage";
import Card from "../../components/card/Card";
import "./FavoritePage.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../../store/thunks/advertsThunks";
import { setAdverts, setCurrentPage } from "../../store/adverts/advertsSlice";
import DropdownFilters from "../../components/filters/DropdownFilters";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const favoriteAdverts = useSelector((state) => state.favourites.list);
  return (
    <div className="catalog-container">
      <div className="catalog-content">
        {favoriteAdverts.length === 0 && (
          <p className="emptyText">
            This list is empty. Please add some adverts to your favorites.
          </p>
        )}
        {favoriteAdverts?.map((advert) => (
          <Card key={advert.id} advert={advert} />
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
