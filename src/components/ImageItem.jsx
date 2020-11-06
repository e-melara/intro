import React from "react";

function ImageItem({ image, name, types }) {
 return (
  <div className="card animate__animated animate__flash">
   <img src={image} alt={"Image " + name} />
   <p>{name}</p>
   <ol>
    {types?.map((type, index) => (
     <li key={name + index}>{type}</li>
    ))}
   </ol>
  </div>
 );
}

export default ImageItem;
