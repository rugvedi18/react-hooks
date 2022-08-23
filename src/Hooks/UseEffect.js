import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log(response.data);
        setData(response.data[0].email);
      });
  }, []);

  return <div>UseEffect Example - Hello {data}</div>;
};

export default UseEffect;
