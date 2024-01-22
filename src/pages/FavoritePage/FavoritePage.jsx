import React from "react";
import "../../pages/CatalogPage/CatalogPage";
import Card from "../../components/card/Card";
import "./FavoritePage.css";
import { useSelector } from "react-redux";

const FavoritePage = () => {
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
