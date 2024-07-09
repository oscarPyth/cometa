import React from "react";
import { Beer } from "../stores/interfaces";

interface CardProps {
  beer: Beer | {};
}

const Card: React.FC<CardProps> = ({ beer }) => {
  
  if (Object.keys(beer).length === 0) {
    return null; 
  }

  const { price, quantity, name, image } = beer as Beer;
  console.log("la cerveza es")
  console.log(beer)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-secondary h-full">
      <img className="h-[22rem] w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="mb-4 flex justify-around">
          <span>Articulo:</span>
          <span>{name}</span>
        </div>
        <hr className="my-4" />
        <div className="mb-4 flex justify-around">
          <span>Precio:</span>
          <p>{price}</p>
        </div>
        <hr className="my-4" />
        <div className="mb-4 flex justify-around">
          <span>Cantidad:</span>
          <p>{quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
