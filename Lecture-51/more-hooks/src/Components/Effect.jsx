import React, { useEffect, useState } from "react";
import axios from "axios";

function Effect() {
  let [data, setData] = useState("");

  //   fetch("https://api.tvmaze.com/search/shows?q=girls").then(async function (
  //     res
  //   ) {
  //     let data = await res.json();
  //     setData(data);
  //   });
  let [count, setCount] = useState(0);

  useEffect(function () {
    axios
      .get("https://api.tvmaze.com/search/shows?q=girls")
      .then(function (res) {
        console.log(res, "sam");

        setData(res);
      });
  }, []); //state/prop

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click - {count} </button>
      api - {JSON.stringify(data)}
    </div>
  );
}

// https://api.tvmaze.com/search/shows?q=girls

export default Effect;
