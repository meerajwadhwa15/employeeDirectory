import React, { FunctionComponent } from "react";
import SearchBar from "./../../components/SearchBar";
import { useHistory } from "react-router-dom";

type Props = {};

const SearchPage: FunctionComponent<Props> = () => {
  const history = useHistory();

  const handleSubmit = ({ name }: { name: string }) => {
    history.push("/overview/" + name);
  };

  return <SearchBar handleSubmit={handleSubmit} />;
};

export default SearchPage;
