import React from "react";
import {
  Card,
  Button,
  Dropdown,
  InputGroup,
  FormControl,
  DropdownButton,
} from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import { useState, useEffect } from "react";
import { data } from "jquery";

function Home() {
  const [charges, setCharges] = useState("");
  const [Currentcharges, setCurrentcharges] = useState({});
  const [fetchCurrentCharges, setFetchCurrentCharges] = useState(false);
  const [currency, setCurrency] = useState("");
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");
  const [adjustCharges, setAdjustCharges] = useState(false);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(
        "https://car-buddy.herokuapp.com/charges/CurrentCharges/61908e3c3c245c9781e3fb24"
      )
      .then((result) => {
        setCurrentcharges(result.data);
        setFetchCurrentCharges(false);
      });
  }, [fetchCurrentCharges]);
  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
        setAdjustCharges(false);
      });
    }
  }, [isLoading]);

  function simulateNetworkRequest() {
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  }
  const handleClick = () => {
    setLoading(true);
    axios.patch(
      "https://car-buddy.herokuapp.com/charges/update/61908e3c3c245c9781e3fb24",
      {
        Price: charges,
        Currency: currency,
        Distance: distance,
        Time: time,
      },
      {
        // Config
      }
    );
    setFetchCurrentCharges(true);
  };

  return (
    <div className="Home">
      <Card
        className="shadow p-3 mb-5 bg-white rounded"
        style={{
          width: "31rem",
          marginInlineStart: "300px",
          marginTop: "20px",
          borderRadius: "10px",
        }}
      >
        <Card.Body>
          <Card.Title>CHARGES</Card.Title>
          <br />

          <Card.Text>
            The charges are currently set to {Currentcharges.Currency}{" "}
            {Currentcharges.Price} per {Currentcharges.Distance} per{" "}
            {Currentcharges.Time}.
            {!adjustCharges ? (
              <Card.Link onClick={() => setAdjustCharges(true)}>
                {" "}
                Edit
              </Card.Link>
            ) : (
              ""
            )}
          </Card.Text>
        </Card.Body>
        {adjustCharges ? (
          <div id="DecideCharges">
            <>
              <FloatingLabel
                controlId="floatingInput"
                label="Price"
                className="smaller-input mb-2"
                size="lg"
              >
                <Form.Control
                  size="lg"
                  placeholder="Price"
                  onChange={(e) => {
                    setCharges(e.target.value);
                  }}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingSelect"
                label="Currency"
                className="mb-2"
              >
                <Form.Select
                  aria-label="Floating label select example"
                  onChange={(e) => {
                    setCurrency(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value=""></option>
                  <option value="PKR">PKR</option>
                  <option value="USD">USD</option>
                  <option value="RMB">RMB</option>
                  <option value="EUR">EUR</option>
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingSelect"
                label="Distance"
                className="mb-2"
              >
                <Form.Select
                  aria-label="Floating label select example"
                  onChange={(e) => setDistance(e.target.value)}
                >
                  <option value=""></option>
                  <option value="Kilometer">Kilometer</option>
                  <option value="Mile">Mile</option>
                  <option value="Feet">Feet</option>
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingSelect"
                label="Time"
                className="mb-3"
              >
                <Form.Select
                  aria-label="Floating label select example"
                  onChange={(e) => setTime(e.target.value)}
                >
                  <option value=""></option>
                  <option value="Hour">Hour</option>
                  <option value="Minute">Minute</option>
                  <option value="Second">Second</option>
                </Form.Select>
              </FloatingLabel>

              <Button
                variant="primary"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoading ? "Saving…" : "Save"}
              </Button>
              <Button
                variant="light"
                style={{ marginLeft: 6 }}
                onClick={() => setAdjustCharges(false)}
              >
                Cancel
              </Button>
            </>
          </div>
        ) : (
          <></>
        )}
      </Card>
    </div>
  );
}

export default Home;
