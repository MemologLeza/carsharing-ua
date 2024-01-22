import React, { useEffect } from "react";
import "./ModalContent.css";
import "./Card.css";
const ModalContent = ({ advert, onClose }) => {
  return (
    <div className="modal-container">
      <div className="car-preview-container">
        <img
          className="car-img"
          src={advert.img}
          alt={`${advert.make} ${advert.model}`}
        />
      </div>
      <h3 className="card-header">
        {advert.make}
        <span className="card-car-model"> {advert.model}, </span>
        {advert.year}
      </h3>
      <div className="card-content">
        <p className="card-card-description-paragraph">
          <span>{advert.address}</span>
          <span className="description-separator">|</span>
          <span>id: {advert.id}</span>
          <span className="description-separator">|</span>
          <span>Year: {advert.year}</span>
          <span className="description-separator">|</span>
          <span>Type{advert.type}</span>
          <span className="description-separator">|</span>
          <span>Fuel Consumption:{advert.fuelConsumption}</span>
          <span className="description-separator">|</span>
          <span>Engine Size: {advert.engineSize}</span>
        </p>
      </div>
      <p className="car-description">{advert.description}</p>
      <p className="car-accessories-title">Accessories and functionalities:</p>
      <div className="card-content">
        <p className="card-card-description-paragraph">
          <span>{advert.accessories[0]}</span>
          <span className="description-separator">|</span>
          <span>{advert.accessories[1]}</span>
          <span className="description-separator">|</span>
          <span>{advert.accessories[2]}</span>
        </p>
        <p className="card-card-description-paragraph">
          <span>{advert.functionalities[0]}</span>
          <span className="description-separator">|</span>
          <span>{advert.functionalities[1]}</span>
          <span className="description-separator">|</span>
          <span>{advert.functionalities[2]}</span>
        </p>
      </div>
      <p className="rental-conditions-title">Rental Conditions: </p>
      <div className="rental-conditions-list">
        {advert.rentalConditions.split("\n").map((condition, index) => (
          <div key={index} className="rental-condition">
            {condition}
          </div>
        ))}

        <div className="rental-condition">
          Millage: <span className="mileage">{advert.mileage}</span>{" "}
        </div>
        <div className="rental-condition">
          Price: <span className="price"> {advert.rentalPrice} </span>
        </div>
      </div>

      <a className="rental-link" href="tel:+1234567890">
        Rental Car
      </a>
      <button className="close-button" onClick={onClose}>
        x
      </button>
    </div>
  );
};

export default ModalContent;
