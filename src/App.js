import React, { useState } from "react";
import "./App.css";

import CustomDropdownMenu from "./components/CustomDropdownMenu/CustomDropdownMenu.js";

const App = () => {
  // State showDropDown to manage our customDropDown --> true = dropDown visible / false = dropDown hidden
  const [showDropDown, setShowDropDown] = useState(false);

  // Data variable which is an array of objects
  // 1) Copy of querySelectorAll in order to scope option of .product-size className
  // 2) Mapping on this array
  // 3) Return an array of objects with four keys, which are in fact the data located in every <option> </option>
  const data = [...document.querySelectorAll(".product-size > option")].map(
    element => {
      return {
        value: element.value,
        dataStock: element.getAttribute("data-stock"),
        dataPrice: element.getAttribute("data-price"),
        name: element.textContent
      };
    }
  );

  return (
    <div className="App">
      <select className="product-size">
        <option></option>
        <option value="10" data-stock="2" data-price="18.00 €">
          S
        </option>
        <option value="11" data-stock="5" data-price="18.00 €">
          M
        </option>
        <option value="12" data-stock="0" data-price="18.00 €">
          L
        </option>
        <option value="13" data-stock="2" data-price="22.00 €">
          XL
        </option>
      </select>
      <CustomDropdownMenu
        data={data}
        showDropDown={showDropDown}
        setShowDropDown={setShowDropDown}
      />
    </div>
  );
};

export default App;
