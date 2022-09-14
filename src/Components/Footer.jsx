import React from "react";
import "../Styles/Footer.css";
import { AiFillApple } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="subscribtion">
          <p style={{ fontSize: 20, textAlign: "center" }}>
            Subscribe our newsletter to be notified when it’ll be live.
          </p>
          <div className="Email">
            <input type="text" placeholder="Email address" />
            <p className="subTxt">Subscribe</p>
          </div>
        </div>
        <div className="Foot">
          <div className="appleContainer">
            <div className="apple">
              <AiFillApple color="white" size={"2em"} className="appleIcon" />
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
            <div className="apple">
              <AiFillApple color="white" size={"2em"} className="appleIcon" />
              <p
                style={{
                  fontSize: 8,
                  marginTop: 0,
                  color: "white",
                  textAlign: "center",
                }}
              >
                Authorised Reseller
              </p>
            </div>
            <div className="apple">
              <AiFillApple color="white" size={"2em"} className="appleIcon" />
              <p
                style={{
                  fontSize: 8,
                  marginTop: 0,
                  color: "white",
                  textAlign: "center",
                }}
              >
                Authorised Service Provider
              </p>
            </div>
            <div className="apple">
              <AiFillApple color="white" size={"2em"} className="appleIcon" />
              <p
                style={{
                  fontSize: 8,
                  marginTop: 0,
                  color: "white",
                  textAlign: "center",
                }}
              >
                Solution Expert Education
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: 8,
              marginTop: 10,
              color: "white",
              textAlign: "center",
            }}
          >
            Copyright © 2022 - All rights reserved
          </p>
        </div>
      </div>
    </>
  );
}
