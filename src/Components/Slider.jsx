import React from "react";
import { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";
import { useContext } from "react";
import { ProductContext } from "../context/Context";
import "../Styles/Slider.css";

export default function Slider() {
  const { imgs } = useContext(ProductContext);
  const [counter, setCounter] = useState(0);

  return (
    <div className="sliderDiv">
      <IoIosArrowDroprightCircle
        id="rightArrow"
        color="white"
        size={"2em"}
        onClick={() => {
          if (counter < imgs.length - 1) {
            setCounter(counter + 1);
          }
        }}
      />
      <IoIosArrowDropleftCircle
        id="leftArrow"
        color="white"
        size={"2em"}
        onClick={() => {
          if (counter > 0) {
            console.log(counter);

            setCounter(counter - 1);
          }
        }}
      />
      <div className="sliderDots">
        <GoPrimitiveDot color="black" opacity={0.8} size={"1em"} />
        <GoPrimitiveDot color="black" opacity={0.6} size={"1em"} />
        <GoPrimitiveDot color="black" opacity={0.4} size={"1em"} />
        <GoPrimitiveDot color="black" opacity={0.2} size={"1em"} />
      </div>
      {imgs.length > 0 && (
        <img alt="img" width="100%" src={imgs[counter].img} />
      )}
    </div>
  );
}
