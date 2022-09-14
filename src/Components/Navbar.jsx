import React from "react";
import { useState } from "react";
import { AiFillApple, AiOutlineSearch } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <div className="navBar">
        <div className="navElements">
          <div className="iconClass">
            <AiFillApple
              color="white"
              size={"2em"}
              style={{ marginLeft: "10px", marginTop: "5px" }}
            />
            <p
              style={{
                fontSize: 8,
                marginTop: 0,
                color: "white",
                textAlign: "center",
              }}
            >
              Premium Reseller
            </p>
          </div>
          <div className={isMobile ? "linksDivMobile" : "linksDiv"}>
            <Link className="link" to="mac">
              Mac
            </Link>
            <Link className="link" to="ipad">
              ipad
            </Link>
            <Link className="link" to="iphone">
              iphone
            </Link>
            <Link className="link" to="Watches">
              Watches
            </Link>
            <Link className="link" to="tv">
              TV
            </Link>
            <Link className="link" to="accessories">
              accessories
            </Link>
            <Link className="link" to="offers">
              Offers
            </Link>
            <div className="line"></div>
            <Link className="link" to="support">
              Support
            </Link>
            <Link className="link" to="services">
              Services
            </Link>
            <Link className="link" to="locations">
              Locations
            </Link>
          </div>
          <div className="iconsDiv">
            <AiOutlineSearch color="white" size={"1.5em"} />
            <BsPerson color="white" size={"1.5em"} />
            <MdOutlineShoppingBag color="white" size={"1.5em"} />
          </div>
          <button className="isMobile" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
