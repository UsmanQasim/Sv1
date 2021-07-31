import React, { useState } from "react";
import "./Gallery.css";
import img1 from "../GalleryPhotos/Anarkali-Chat-1.jpg";
import img2 from "../GalleryPhotos/garden-room-at-syon-park.jpg";
import img3 from "../GalleryPhotos/The-Walled-Garden-At-Syon.jpg";
import img4 from "../GalleryPhotos/Zinnia-Gardens.jpg";
import img5 from "../GalleryPhotos/LAKHNAWI-HALWA-1.jpg";
import img6 from "../GalleryPhotos/GRAND-SAPPHIRE-LONDON.jpg";
import img7 from "../GalleryPhotos/InterContinental-London-Park-Lane.jpg";
import img8 from "../GalleryPhotos/phototemp.jpg";
import img9 from "../GalleryPhotos/alsophototemp.png";
import * as Ai from "react-icons/ai";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgsrc: img1,
    },
    {
      id: 2,
      imgsrc: img2,
    },
    {
      id: 3,
      imgsrc: img3,
    },
    {
      id: 4,
      imgsrc: img4,
    },
    {
      id: 5,
      imgsrc: img5,
    },
    {
      id: 6,
      imgsrc: img6,
    },
    {
      id: 7,
      imgsrc: img7,
    },
    {
      id: 8,
      imgsrc: img8,
    },
    {
      id: 9,
      imgsrc: img9,
    },
  ];

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
        <Ai.AiOutlineClose onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((items, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(items.imgsrc)}
            >
              <img src={items.imgsrc} alt="images" style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
