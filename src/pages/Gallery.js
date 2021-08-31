import React, { useState } from "react";
import "./Gallery.css";
import { AiOutlineClose } from "react-icons/ai";
import GalleryPhotos from "../GalleryPhotos/";

const Gallery = () => {
  const [model, setModel] = useState(false);
  const [tempimgSrc, SetTempImgSrc] = useState("");

  const getImg = (imgsrc) => {
    SetTempImgSrc(imgsrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="img" />
        <AiOutlineClose onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {GalleryPhotos
          ? GalleryPhotos.map((item, key) => (
              <div
                className="pics"
                key={key}
                onClick={() => getImg(item.default)}
              >
                <img
                  src={item.default}
                  alt="images"
                  style={{ width: "100%" }}
                />
              </div>
            ))
          : "LOADING! Getting Images..."}
      </div>
    </>
  );
};

export default Gallery;
