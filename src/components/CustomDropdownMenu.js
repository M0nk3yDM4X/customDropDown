import React, { useState } from "react";
import { KeyboardArrowDown } from "@material-ui/icons";

const CustomDropdownMenu = ({ array, showDropDown, setShowDropDown }) => {
  const [title, setTitle] = useState("Veuillez sélectionner");

  return (
    <div className="customDropDown">
      <div
        className={
          showDropDown === false ? "titleContainer" : "titleContainer-Options"
        }
        onClick={() => {
          setShowDropDown(!showDropDown);
        }}
      >
        <h1>{title}</h1>
        <KeyboardArrowDown />
      </div>
      {showDropDown === false ? null : (
        <div className="optionsContainer">
          <div className="option-title">
            <span>Taille :</span>
          </div>
          {array.map((element, index) => {
            let name = element.name;
            let stock = element.dataStock;
            let price = element.dataPrice;

            return (
              <div
                key={index}
                className="option"
                onClick={() => {
                  setTitle(name);
                  setShowDropDown(!showDropDown);
                }}
              >
                <span className="option-name">{name}</span>
                {stock === 0 ? (
                  <span>Désolé, cet article n'est plus disponible</span>
                ) : stock > 0 && stock <= 4 ? (
                  <span>Vite plus que 4 en stock !</span>
                ) : (
                  <span>En stock</span>
                )}

                <span className="option-price">{price} €</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomDropdownMenu;
