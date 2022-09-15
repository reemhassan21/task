import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../Styles/Product.css";
import { GrFavorite } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiRecycle } from "react-icons/gi";
import { useContext } from "react";
import { ProductContext } from "../context/Context";

export default function InStock(props) {
  const { productImgs, Prices } = useContext(ProductContext);
  const [counter, setCounter] = useState(1);
  const location = useLocation();
  const productID = location.state;
  const productName = location.hash.split("#")[1].split("%20").join(" ");
  return (
    <>
      <div className="pcontainer">
        <div className="leftSide">
          <div className="pimgs">
            {productImgs[productID - 1]?.map((img) => (
              <img src={img} alt="img" id="pimg" />
            ))}
          </div>
          <div>
            {productImgs.length > 0 && (
              <img src={productImgs[productID - 1][0]} alt="img" id="bigImg" />
            )}
          </div>
        </div>
        <div className="rightSide">
          <div className="appleFav">
            <p>APPLE</p>
            <GrFavorite style={{ marginTop: "20px" }} />
          </div>
          <p style={{ fontWeight: "bold" }}>{productName}</p>
          <AiFillStar
            style={{ marginBottom: "-20px" }}
            color="yellow"
            size="1.5em"
          />
          <AiFillStar
            style={{ marginBottom: "-20px" }}
            color="yellow"
            size="1.5em"
          />
          <AiFillStar
            style={{ marginBottom: "-20px" }}
            color="yellow"
            size="1.5em"
          />
          <AiOutlineStar style={{ marginBottom: "-20px" }} size="1.5em" />
          <AiOutlineStar style={{ marginBottom: "-20px" }} size="1.5em" />
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "black",
              marginBottom: "-20px",
            }}
          >
            ${Prices[productID - 1]}
          </p>
          <p style={{ color: "red" }}>OutOfStock</p>
          <div className="counter">
            <GrAddCircle size="1.5em" onClick={() => setCounter(counter + 1)} />
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: "0",
              }}
            >
              {counter}
            </p>
            <IoMdRemoveCircleOutline
              size="1.5em"
              onClick={() => {
                if (counter > 1) setCounter(counter - 1);
              }}
            />
          </div>
          <div className="price">
            <div className="priceChild">
              <p style={{ color: "gray" }}>Full Price</p>
            </div>
            <div className="priceChild">
              <p>Installments</p>
            </div>
          </div>
          <div className="logos">
            <div className="logo">
              <img style={{ width: "80px" }} alt="img" src="../CIB_Logo.png" />
            </div>
            <div className="logo">
              <img style={{ width: "80px" }} alt="img" src="../CIB_Logo.png" />
            </div>

            <div className="logo">
              <img style={{ width: "80px" }} alt="img" src="../CIB_Logo.png" />
            </div>
            <div className="logo">
              <img style={{ width: "80px" }} alt="img" src="../CIB_Logo.png" />
            </div>
          </div>
          <p>color</p>
          <div className="color">
            <div className="colors">
              <p
                style={{
                  color: "gray",
                  marginLeft: "40px",
                  marginTop: "0px",
                  fontSize: "13px",
                }}
              >
                silver
              </p>
              <div
                className="circle"
                style={{ backgroundColor: "#EDEDED", marginLeft: "35%" }}
              ></div>
            </div>
            <div className="colors">
              <p
                style={{
                  marginLeft: "20px",
                  marginTop: "0px",
                  fontSize: "13px",
                }}
              >
                Sierra Blue
              </p>
              <div
                className="circle"
                style={{ backgroundColor: "#90BAD1" }}
              ></div>
            </div>
          </div>
          <p>Insurance</p>

          <div className="Insurance">
            <div className="ins">
              <p>1 year</p>
              <p>$99.00</p>
            </div>
            <div className="ins">
              <p>2 year</p>
              <p>$159.00</p>
            </div>
          </div>
          <button id="btn">Add to cart</button>
          <hr></hr>
          <div className="shipping">
            <MdOutlineLocalShipping style={{ marginTop: "10px" }} />
            <p style={{ marginLeft: "20px", marginTop: "10px" }}>
              Free shipping, arrives by Tue, Nov 23
            </p>
          </div>
          <div className="return">
            <GiRecycle />
            <p style={{ marginLeft: "20px", marginTop: "0px" }}>
              Free 10-day return window starts Dec 26th Details
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
