import React, { useState } from "react";
import "./App.css";

import CustomDropdownMenu from "./components/CustomDropdownMenu.js";

const App = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const array = [
    { name: "S", value: 10, dataStock: 2, dataPrice: 18.0 },
    { name: "M", value: 11, dataStock: 5, dataPrice: 18.0 },
    { name: "L", value: 12, dataStock: 0, dataPrice: 18.0 },
    { name: "XL", value: 13, dataStock: 2, dataPrice: 22.0 }
  ];

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
        array={array}
        showDropDown={showDropDown}
        setShowDropDown={setShowDropDown}
      />
    </div>
  );
};

export default App;
