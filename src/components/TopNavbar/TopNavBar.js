import React from "react";
import { IconContext } from "react-icons";
import { ImSearch } from "react-icons/im";

export default function TopNavBar(props) {
  return (
    <IconContext.Provider value={{ color: "#ffff" }}>
      <div className="navbar">
        <span
          style={{
            marginLeft: 20,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {props.name}
        </span>

        <div style={{ marginLeft: "520px", fontSize: 14, fontWeight: "bold" }}>
          $5,915.73
          <span style={{ color: "#e5e6eb", marginLeft: 5, marginRight: 5 }}>
            |
          </span>
          <span
            style={{
              color: "green",
              marginLeft: 5,
              marginRight: 5,
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            +3.56%
          </span>
        </div>
      </div>
    </IconContext.Provider>
  );
}
