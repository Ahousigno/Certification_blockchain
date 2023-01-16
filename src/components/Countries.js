import React, { useState } from "react";
import axios from "axios";

const Countries = () => {
  const { data } = useState("Hello");
  axios.get("");

  return <div>{data}</div>;
};

export default Countries;
