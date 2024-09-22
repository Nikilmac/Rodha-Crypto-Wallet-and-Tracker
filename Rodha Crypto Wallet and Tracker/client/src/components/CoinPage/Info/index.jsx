import React, { useState } from "react";
import "./styles.css";

const Info = ({ title, desc }) => {
  const [toggle, setToggle] = useState(false);
  const maxLength = 300;

  // Determine the display text based on the toggle state
  const displayedDesc = desc.length > maxLength
    ? (toggle ? desc : `${desc.slice(0, maxLength)}...`)
    : desc;

  return (
    <div className="grey-wrapper info-component">
      <h1>{title}</h1>
      <p className="info-p" style={{ color: "white", paddingLeft: "100px"}}>
        {displayedDesc}
        {desc.length > maxLength && (
          <span
            style={{ color: "#5f8fb8", cursor: "pointer" }}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? " Read Less" : " Read More"}
          </span>
        )}
      </p>
    </div>
  );
};

export default Info;
