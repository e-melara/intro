import React, { useState } from "react";
// import PropTypes from "prop-types";

import GridGif from "./components/GridGif";
import AddGifExpert from "./components/AddGifExpert";

function GifExpert() {
 const [categories, setCategories] = useState(["ditto"]);

 return (
  <>
   <h2>GifExpert</h2>
   <AddGifExpert setCategories={setCategories} />
   <hr />
   <ul className="list-styled">
    {categories.map((categorie) => (
     <GridGif key={categorie} category={categorie} />
    ))}
   </ul>
  </>
 );
}

// GifExpert.propTypes = {};

export default GifExpert;
