import React, { FunctionComponent } from "react";
import Container from "react-bootstrap/Container";
import "./style.css";

type Props = {};

const Header: FunctionComponent<Props> = ({}) => {
  return (
    <header>
      <Container>Employee Directory</Container>
    </header>
  );
};

export default Header;
