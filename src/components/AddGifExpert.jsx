import React, { useState } from "react";
import PropTypes from "prop-types";

function AddGifExpert({ setCategories }) {
 const [inputValue, setInputValue] = useState("");

 const handleInputChange = (e) => {
  setInputValue(e.target.value);
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  setCategories((all) => [inputValue, ...all]);
  setInputValue("");
 };

 return (
  <>
   <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue} onChange={handleInputChange} />
   </form>
  </>
 );
}

AddGifExpert.propTypes = {
 setCategories: PropTypes.func.isRequired,
};

export default AddGifExpert;
