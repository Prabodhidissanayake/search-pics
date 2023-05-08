import React from "react";

function ImageShow({image}) {
  return <div>
    <img alt='pictureofthesearch' src={image.urls.small}/>
  </div>;
}

export default ImageShow;
