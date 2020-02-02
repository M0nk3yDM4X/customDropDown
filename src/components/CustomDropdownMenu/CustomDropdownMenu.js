import React, { useState } from "react";
import "../CustomDropdownMenu/CustomDropdownMenu.css";
import { KeyboardArrowDown } from "@material-ui/icons";

const CustomDropdownMenu = ({ data, showDropDown, setShowDropDown }) => {
  // Setting a default title to our dropDownMenu
  const [title, setTitle] = useState("Veuillez sélectionner");

  // dropDown function which allow us to show or not the dropDownMenu by using our state showDropDown from App.js
  const dropdown = () => {
    setShowDropDown(!showDropDown);
  };

  // userChoice function which change the title of our dropDownMenu by the user choice, and it also change the value of state showDropDown
  const userChoice = name => {
    setTitle(name);
    setShowDropDown(!showDropDown);
  };

  return (
    <div className="customDropDown">
      <div
        className={
          showDropDown === false ? "titleContainer" : "titleContainer-Options"
        }
        onClick={dropdown}
      >
        <h1>{title}</h1>
        <KeyboardArrowDown />
      </div>

      {showDropDown === false ? null : (
        <div className="optionsContainer">
          {data.map((element, index) => {
            let name = element.name;
            let stock = element.dataStock;
            let price = element.dataPrice;

            if (name === "") {
              name = "Taille :";
            }
            return (
              <div
                key={index}
                className={name === "Taille :" ? "option-title" : "option"}
                onClick={() => {
                  if (name !== "Taille :") {
                    userChoice(name);
                  }
                }}
              >
                <span className="option-name">{name}</span>

                {stock === "0" ? (
                  <p>Désolé, cet article est épuisé</p>
                ) : stock > 0 && stock < 4 ? (
                  <p>Vite, plus que 4 en stock !</p>
                ) : stock > 4 ? (
                  <p>En stock</p>
                ) : null}

                <span className="option-price">{price}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomDropdownMenu;
