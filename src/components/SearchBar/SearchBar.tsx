import React, { useState, FunctionComponent } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type Props = {
  handleSubmit: Function;
};

const SearchBar: FunctionComponent<Props> = ({ handleSubmit }) => {
  const [employeeName, setEmployeeName] = useState("");

  return (
    <Form
      onSubmit={() => {
        handleSubmit({ name: employeeName });
      }}
    >
      <Row
        style={{ minHeight: "calc(100vh - 50px)" }}
        noGutters
        className="justify-content-md-center align-content-center"
      >
        <Col xs={12} md={8}>
          <Form.Group controlId="searchBar">
            <Form.Control
              type="search"
              value={employeeName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmployeeName(e.target.value);
              }}
              placeholder="Enter Employee name"
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={2}>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;
