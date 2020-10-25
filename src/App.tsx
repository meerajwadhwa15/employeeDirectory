import React from "react";
import Container from "react-bootstrap/Container";
import Routes from "./Routes";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Container className="App">
        <Routes />
      </Container>
    </>
  );
}

export default App;
