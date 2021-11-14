import React from "react";
import { Button, Spinner } from "react-bootstrap";

class BootstrapLoadingButton extends React.Component {
  render() {
    return (
      <div>
        <Button
          variant="success"
          style={{ marginInlineStart: 10, marginBottom: 6 }}
        >
          Save
        </Button>
      </div>
    );
  }
}

export default BootstrapLoadingButton;
