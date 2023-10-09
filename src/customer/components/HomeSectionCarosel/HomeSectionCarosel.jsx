import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import { KeyboardArrowLeft } from "@mui/icons-material";


const HomeSectionCarosel = ({data, sectionName}) => {
    const [activeIndex, setActiveIndex]=useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
  };

  const slidePreview=()=>setActiveIndex(activeIndex-1);
  const slideNext=()=>setActiveIndex(activeIndex+1);

  const syncActiveIndex=({item})=>setActiveIndex(item)

  const items = data.slice(0,20).map((items) => <HomeSectionCard product={items}/>);
  return (
    <div className="border">
        <h2 className="text-2xl font-extrabold text-gray-600 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
        //   infinite
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== 0 && <Button
          variant="contained"
          className=" bg-white"
          onClick={slidePreview}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeft
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
}
        {activeIndex !== items.length-5 && <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeft
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
