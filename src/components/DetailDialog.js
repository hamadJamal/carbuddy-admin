import Modal from "react-bootstrap/Modal";
import React from "react";
import {
  Card,
  Button,
  Dropdown,
  InputGroup,
  FormControl,
  DropdownButton,
} from "react-bootstrap";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="me"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Complaint Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          The ride owner was repeatedly trying to harrass the passengers.
          Despite repeted warnings, the ride owner continued with its illicit
          behavior. This must be mitigated and he should be brought to justice.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
