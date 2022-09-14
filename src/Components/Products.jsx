import React from "react";
import "../Styles/Products.css";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/Context";

export default function Products(props) {
  const { Products } = useContext(ProductContext);
  return (
    <div className="container">
      <h3 style={{ textAlign: "center" }}>Explore products</h3>
      <div className="products">
        <div className="Product">
          {Products.length > 0 && (
            <Link
              to={{
                pathname: "/first",

                hash: "Apple 20W USB-C Power Adapter",
              }}
              state={1}
            >
              <img alt="img" width="70%" src={Products[0].img[0]} />
            </Link>
          )}
          <p>Apple 20W USB-C Power Adapter</p>
          <div className="details ">
            <p style={{ fontWeight: "bold" }}>$19.00</p>
            <p className="stock ">In Stock</p>
          </div>
        </div>

        <div className="Product">
          {Products.length > 0 && (
            <Link
              to={{
                pathname: "/first",
                hash: "Belkin 3.4A Coiled UltraFast USB Car Charger",
              }}
              state={2}
            >
              <img alt="img" width="70%" src={Products[1].img[0]} />
            </Link>
          )}
          <p>Belkin 3.4A Coiled UltraFast USB Car Charger</p>
          <div className="details stockNew">
            <p style={{ fontWeight: "bold" }}>$19.00</p>
            <p className="stock">In Stock</p>
          </div>
        </div>

        <div className="Product">
          {Products.length > 0 && (
            <Link
              className="link"
              to={{
                pathname: "/outofstock",
                hash: "Anker PowerPort III Nano",
              }}
              state={3}
            >
              <img alt="img" width="70%" src={Products[2].img[0]} />
            </Link>
          )}
          <p>Anker PowerPort III Nano</p>
          <br />

          <div className="details stockNew">
            <p style={{ fontWeight: "bold" }}>$19.00</p>
            <p className="stock " style={{ color: "red" }}>
              Out of Stock
            </p>
          </div>
        </div>

        <div className="Product">
          {Products.length > 0 && (
            <Link
              className="link"
              to={{
                pathname: "/first",
                hash: "Apple Airtag - 1 Pack",
              }}
              state={4}
            >
              <img alt="img" width="70%" src={Products[3].img[0]} />
            </Link>
          )}
          <p>Apple Airtag - 1 Pack</p>
          <br />
          <div className="details">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontWeight: "bold", color: "red" }}>$1999.00</span>
              <del style={{ color: "gray", fontSize: "13px" }}>$1999.00</del>
            </div>
            <br />
            <p className="stock">In Stock</p>
          </div>
        </div>
      </div>
      <div className="navigation">
        <IoIosArrowDropleft size={"2em"} opacity={0.4} />
        <div>
          <GoPrimitiveDot
            style={{ marginTop: "8px", marginLeft: "5px" }}
            color="black"
            opacity={0.7}
            size={"0.8em"}
          />
          <GoPrimitiveDot
            style={{ marginTop: "8px", marginLeft: "5px" }}
            color="black"
            opacity={0.5}
            size={"0.8em"}
          />
          <GoPrimitiveDot
            style={{ marginTop: "8px", marginLeft: "5px" }}
            color="black"
            opacity={0.4}
            size={"0.8em"}
          />
          <GoPrimitiveDot
            style={{ marginTop: "8px", marginLeft: "5px" }}
            color="black"
            opacity={0.3}
            size={"0.8em"}
          />
          <GoPrimitiveDot
            style={{ marginTop: "8px", marginLeft: "5px" }}
            color="black"
            opacity={0.2}
            size={"0.8em"}
          />
        </div>
        <IoIosArrowDropright
          style={{ marginLeft: "5px" }}
          size={"2em"}
          opacity={0.4}
        />
      </div>
    </div>
  );
}
