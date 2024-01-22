import React, { useState } from "react";
import "./Card.css";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../store/thunks/favoritesThunks";
import iconSprite from "../../svg/svg-sprite.svg";
import ModalContent from "./ModalContent";

const Card = ({ advert }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.list);

  const isFavourite = favourites.some((fav) => fav.id === advert.id);

  const handleToggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFromFavourites(advert));
    } else {
      dispatch(addToFavourites(advert));
    }
  };

  const [isOpened, toggleOpen] = useState(false);

  const openDialog = () => {
    toggleOpen(true);
  };

  const closeDialog = () => {
    toggleOpen(false);
  };

  return (
    <div className="card-container">
      <div className="card-img-container">
        <img
          className="card-image"
          src={advert.img}
          alt={`${advert.make} ${advert.model}`}
        />

        <svg className={`icon card-img-heard`} onClick={handleToggleFavourite}>
          <use
            href={iconSprite + `#${isFavourite ? "active" : "normal"}`}
            width="18"
            height="18"
          />
        </svg>
      </div>
      <div className="card-header-content">
        <div className="card-product-name">
          <div className="card-car-brand">{advert.make}</div>
          <div className="card-car-model">{advert.model}</div>
        </div>
        <div className="card-product-price">{advert.rentalPrice}</div>
      </div>

      <div className="card-content">
        <p className="card-card-description-paragraph">
          <span>{advert.address}</span>
          <span className="description-separator">|</span>
          <span>{advert.rentalCompany}</span>
          <span className="description-separator">|</span>
          <span>{advert.type}</span>
          <span className="description-separator">|</span>
          <span>{advert.make}</span>
          <span className="description-separator">|</span>
          <span>{advert.id}</span>
          <span className="description-separator">|</span>
          <span>{advert.functionalities[1]}</span>
        </p>
      </div>

      <div className="card-actions">
        <button className="learn-button" onClick={openDialog}>
          Learn more
        </button>
      </div>
      <Modal
        show={isOpened}
        onHide={closeDialog}
        dialogClassName="custom-modal"
      >
        {/* <Modal.Header
          dialogClassName="custom-modal-header"
          className="custom-modal-header"
          closeButton
        ></Modal.Header> */}
        <Modal.Body>
          <ModalContent advert={advert} onClose={closeDialog} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Card;
