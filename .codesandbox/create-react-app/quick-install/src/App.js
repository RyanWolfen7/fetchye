import React from "react";
import { useFetchye } from "fetchye";
import "./styles.css";

export default function App() {
  const { isLoading, data } = useFetchye("https://swapi.dev/api/starships/9/");
  return <>{!isLoading && <p>{data.body.name}</p>}</>;
}
