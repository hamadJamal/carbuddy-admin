import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { IconContext } from "react-icons";
import Dialog from "../Dialog/Dialog";
import { useState } from "react";
export default function SmallFeedCard(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className="inner"
      style={{
        border:
          props.data.status == "Approved"
            ? "1px solid rgb(20, 103, 246)"
            : "#fff",
      }}
    >
      <div>
        <Dialog
          setFetchAccounts={props.setFetchAccounts}
          data={props.data}
          status={open}
          handleClose={handleClose}
        />
        <div
          style={{
            float: "left",
            fontSize: 12,
            marginLeft: 8,
            marginTop: 2,
            marginBottom: 1,
            color:
              props.data.status == "Not Approved" || props.data.status == "Post"
                ? "#F61414"
                : "#1376C1",
          }}
        >
          {props.data.status}
        </div>

        <IconContext.Provider value={{ color: "black", size: "20px" }}>
          <div
            style={{
              float: "right",
              marginRight: "10px",
              marginTop: 2,
              marginBottom: 1,
            }}
          >
            {/* <BsThreeDots /> */}
          </div>
        </IconContext.Provider>
      </div>
      <br />
      <div style={{ marginBottom: "15px" }}>
        <img
          src={props.data.image}
          alt="new"
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "20px",
            float: "left",
            marginLeft: "10px",
          }}
        />
        <span
          style={{
            float: "left",
            marginLeft: "10px",
            fontWeight: "bold",
          }}
        >
          {props.data.Name}
        </span>
      </div>
      {/* <br /> */}
      <div>
        <span
          style={{
            float: "left",
            fontSize: 11,
            marginTop: "5px",
            marginBottom: "10px",
            marginLeft: "15px",
            marginRight: "15px",
            textAlign: "start",
            fontFamily: "inherit",
            fontWeight: "light",
          }}
        >
          {props.data.Description}
          <span
            style={{
              float: "right",
              fontSize: 11,
              marginTop: "5px",
              // marginBottom: "10px",
              // marginLeft: "15px",
              // marginRight: "15px",
              textAlign: "start",
              fontFamily: "inherit",
              fontWeight: "light",
              color: "#51C651",
              fontStyle: "italic",
              textDecoration: "underline",
            }}
          >
            <a onClick={() => handleOpen()}>click to view details</a>
          </span>
        </span>
      </div>
    </div>
  );
}
