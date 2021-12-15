import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Carou() {
  return (
    <Carousel renderThumbs={() => {}}>
      <div style={{ margin: "0 10px" }}>
        <a style={{ display: "block" }}>
          <img
            src="https://res.cloudinary.com/abc123124/image/upload/v1639551914/test/top-ip-2400-600-1920x480_uepsh1.png"
            alt=""
          />
        </a>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/abc123124/image/upload/v1639551914/test/2400-600-1920x480_am1ycm.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/abc123124/image/upload/v1639551914/test/top-aw-2400-600-1920x480_alzqs8.png"
          alt=""
        />
      </div>
    </Carousel>
  );
}
