import React from "react";
import { Col, Row } from "antd";
import CCard from "../components/ComplaintCard";
import { useEffect, useState } from "react";
import axios from "axios";
function Complaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    axios.get("https://car-buddy.herokuapp.com/complaints").then((result) => {
      setComplaints(result.data);
    });
  }, []);
  return (
    <>
      <Row
        style={{
          marginInlineStart: 300,
          marginTop: 20,
        }}
      >
        {complaints.map((CardContent, index) => {
          return (
            <CCard
              key={index}
              Complainant={CardContent.Complainant}
              Complainee={CardContent.Complainee}
              Description={CardContent.Description}
              Image={CardContent.Image}
              _id={CardContent._id}
              setComplaints={setComplaints}
              complaints={complaints}
            />
          );
        })}
      </Row>
    </>
  );
}

export default Complaints;

// const Cards = [
//   [
//     <Card name="Ahsan Iqbal" imageSrc="https://joeschmoe.io/api/v1/1" />,
//     <Card name="Hammad Qayyun" imageSrc="https://joeschmoe.io/api/v1/2" />,
//     <Card name="Hammad Qayyun" imageSrc="https://joeschmoe.io/api/v1/3" />,
//   ],
//   [
//     <Card name="Ahsan Iqbal" imageSrc="https://joeschmoe.io/api/v1/4" />,
//     <Card name="Hammad Qayyun" imageSrc="https://joeschmoe.io/api/v1/5" />,
//     <Card name="Hammad Qayyun" imageSrc="https://joeschmoe.io/api/v1/6" />,
//   ],
// ];

// {Cards.map((item, index) => {
//   return (
//     <Row style={{ marginInline: 300 }}>
//       <Col>{item[0]}</Col>
//       <Col>{item[1]}</Col>
//       <Col>{item[2]}</Col>
//     </Row>
//   );
// })}
