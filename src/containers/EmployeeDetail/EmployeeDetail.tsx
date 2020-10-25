import React, { FunctionComponent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import { State as storeState } from "./../../type/store";
import { FetchSubordinates } from "./../../store/action/employee";
import Spinner from "./../../components/Spinner";

type Props = {
  match: {
    params: {
      name: string;
    };
  };
};

const EmployeeDetail: FunctionComponent<Props> = ({
  match: {
    params: { name },
  },
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (name) {
      dispatch(FetchSubordinates(name));
    }
  }, [name]);

  const employeeData = useSelector((state: storeState) => {
    return state.EmployeeReducer;
  });

  return (
    <Container className="pt-4">
      {employeeData.errorMessage ? (
        <Alert variant="danger">
          {employeeData.errorMessage} with name "{name.trim()}"
        </Alert>
      ) : employeeData.isFetching ? (
        <Spinner />
      ) : (
        <div>
          <h3>
            {name} <Badge variant="primary">{employeeData.title}</Badge>
          </h3>
          <h6 className="pt-4">Subordinates:</h6>
          <ListGroup>
            {employeeData.subordinatesName.map((subordinate) => {
              return (
                <ListGroup.Item key={subordinate.name}>
                  {subordinate.name}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      )}
    </Container>
  );
};

export default EmployeeDetail;
