import React from "react";

import ImageItem from "./ImageItem";
import useGifHooks from "../hooks/useGifHooks";

function GridGif({ category }) {
 const { loading, error, data: images } = useGifHooks(category);

 return (
  <li>
   {loading && <p>Loading ....</p>}
   {!loading && !error && (
    <div className="card-grid animate__animated animate__fadeIn">
     <ImageItem key={images?.id + "-pokemon-" + images?.name} {...images} />
    </div>
   )}
  </li>
 );
}

export default GridGif;
