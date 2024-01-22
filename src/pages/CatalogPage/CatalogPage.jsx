import React, { useEffect } from "react";
import "./CatalogPage.css";
import Card from "../../components/card/Card";

import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../../store/thunks/advertsThunks";
import DropdownFilters from "../../components/filters/DropdownFilters";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector((state) => state.adverts.list);
  const currentPage = useSelector((state) => state.adverts.currentPage);
  const status = useSelector((state) => state.adverts.status);
  const isLoadMore = adverts.length % 12 === 0 && adverts.length !== 0;

  const loadMore = () => {
    dispatch(fetchAdverts(currentPage));
  };

  useEffect(() => {
    return () => {
      if (status === "idle") {
        loadMore();
      }
    };
  }, []);

  return (
    <div className="catalog-container">
      <DropdownFilters />
      <div className="catalog-content">
        {adverts?.map((advert) => (
          <Card key={advert.id} advert={advert} />
        ))}
      </div>
      {isLoadMore && (
        <button
          onClick={loadMore}
          disabled={status === "loading"}
          className="loadmore-button"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
