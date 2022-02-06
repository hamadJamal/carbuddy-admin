import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image1 from "./picture.png";
import { FiCheck } from "react-icons/fi";
import { IoBanSharp } from "react-icons/io5";
import { useEffect } from "react";
import { IconContext } from "react-icons";
import axios from "axios";

import "./Dialog.css";
import ApproveButton from "react-bootstrap/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 2,

  p: 2,
};

export default function TransitionsModal(props) {
  const handleApprove = (_id) => {
    axios.patch(
      "https://car-buddy.herokuapp.com/accounts/update/" + _id,
      {
        flag: true,
      },
      {
        // Config
      }
    );
    props.handleClose();
    props.setFetchAccounts(true);

    // setFetchCurrentCharges(true);
  };

  const handleDecline = (_id) => {
    axios.patch(
      "https://car-buddy.herokuapp.com/accounts/update/" + _id,
      {
        flag: false,
      },
      {
        // Config
      }
    );
    props.handleClose();
    props.setFetchAccounts(true);
    // setFetchCurrentCharges(true);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.status}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.status}>
          <Box sx={style}>
            <div className="uppderdiv">
              <div className="child-up">
                <div className="child-down-row">
                  <IconContext.Provider
                    value={{ color: "white", size: "20px" }}
                  >
                    <ApproveButton
                      style={{
                        maxHeight: "50px",
                      }}
                      onClick={() => handleApprove(props.data._id)}
                    >
                      <FiCheck
                        style={{
                          marginRight: "6px",
                        }}
                      />
                      Approve
                    </ApproveButton>
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ color: "black", size: "20px" }}
                  >
                    <ApproveButton
                      style={{
                        background: "white",
                        color: "black",
                        opacity: 0.8,
                        maxHeight: "50px",
                        marginRight: "8px",
                      }}
                      onClick={() => handleDecline(props.data._id)}
                    >
                      <IoBanSharp
                        style={{
                          marginRight: "6px",
                          opacity: 0.8,
                          paddingBottom: "3px",
                        }}
                      />
                      Decline
                    </ApproveButton>
                  </IconContext.Provider>

                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                    style={{ flex: 1 }}
                  >
                    Account Details
                  </Typography>
                </div>

                <div className="ImageDiv">
                  <div>
                    <img
                      src={Image1}
                      alt="new"
                      style={{
                        width: "170px",
                        height: "170px",
                        borderRadius: "100px",
                      }}
                    />
                  </div>

                  <p className="NameText">{props.data.Name}</p>
                </div>
              </div>
              <div className="child-down">
                <div className="child-down-row">
                  <div>{props.data.RegisterAs}</div>
                  <div className="child-down-row-title">Register as</div>
                </div>
                {props.data.RegisterAs == "Ride Owner" ? (
                  <div>
                    <div className="child-down-row">
                      <div> Suzuki Cultus</div>
                      <div className="child-down-row-title">Vehicle Owned</div>
                    </div>
                    <div className="child-down-row">
                      <div>LEA 2121</div>
                      <div className="child-down-row-title">
                        Vehicle Registeration
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                <div className="child-down-row">
                  <div>{props.data.cnic}</div>
                  <div className="child-down-row-title">CNIC</div>
                </div>

                <div className="child-down-row">
                  <div>{props.data.email}</div>
                  <div className="child-down-row-title">Email</div>
                </div>

                <div className="child-down-row">
                  <div>{props.data.phone_number}</div>
                  <div className="child-down-row-title">Phone</div>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
