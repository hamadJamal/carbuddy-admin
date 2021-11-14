import React from "react";
import "antd/dist/antd.css";
import { Avatar, Col, Row } from "antd";
import { CgDetailsMore } from "react-icons/cg";
import { BiBlock } from "react-icons/bi";
import { FcApproval } from "react-icons/fc";
import MyVerticallyCenteredModal from "../components/DetailDialog";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import { IconContext } from "react-icons";
import { Card } from "react-bootstrap";

function ComplaintCard(props) {
  function handleBlockUser(id) {
    let RemainingComplaints = [];
    props.complaints.map((item) => {
      if (item._id == id) {
      } else {
        RemainingComplaints.push(item);
      }
    });
    props.setComplaints(RemainingComplaints);
  }
  function handleDiscard(id) {
    let RemainingComplaints = [];
    props.complaints.map((item) => {
      if (item._id == id) {
      } else {
        RemainingComplaints.push(item);
      }
    });
    props.setComplaints(RemainingComplaints);
  }

  return (
    <Card
      style={{
        width: "18rem",
        marginInlineStart: 30,
        marginTop: 20,
      }}
      className="shadow p-3 mb-5 bg-white rounded"
    >
      <Card.Img variant="top" src={props.Image} />
      <Card.Body>
        <Card.Title>{props.Complainee}</Card.Title>

        <Card.Text>{props.Description}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link onClick={() => handleBlockUser(props._id)}>
          Block User
        </Card.Link>
        <Card.Link onClick={() => handleDiscard(props._id)}>Discard</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ComplaintCard;
{
  /* <IconContext.Provider value={{ size: 30, color: "#060b26" }}>
      <Card
        style={{
          width: 240,
          marginTop: 20,
          marginLeft: 20,
        }}
        className="shadow p-3 mb-5 bg-white rounded"
        cover={<img alt="example" src={props.imageSrc} />}
        actions={[
          <IconContext.Provider value={{ size: 30, color: "red" }}>
            <BiBlock />
          </IconContext.Provider>,
          <IconContext.Provider value={{ size: 30 }}>
            <FcApproval />
          </IconContext.Provider>,

          <CgDetailsMore onClick={() => setModalShow(true)} />,
        ]}
      >
        <Meta
          avatar={<Avatar src={props.imageSrc} />}
          title={props.name}
          description="The ride owner was repeatedly trying to harrass the client.."
        />
      </Card>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </IconContext.Provider> */
}
