import React, { useEffect, useState } from "react";

function Timer() {
  let [time, setTime] = useState(0);

  useEffect(
    function () {
      let id = setInterval(function () {
        setTime(time + 1);
      }, 1 * 1000);

      //   cleanup functions
      return () => {
        clearInterval(id);
      };
    },
    [time]
  );

  return <div>Time: {time}</div>;
}

export default Timer;
