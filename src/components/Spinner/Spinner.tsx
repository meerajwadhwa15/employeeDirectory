import React, { FunctionComponent } from "react";
import Spinner from "react-bootstrap/Spinner";

type Props = {};

const SpinnerComponent: FunctionComponent<Props> = ({}) => {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default SpinnerComponent;
