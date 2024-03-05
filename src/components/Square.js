import { useState } from "react";

function Square(params) {
  const [value, setValue] = useState("");

  function handleClick() {
    setValue("X");
  }

  return (
    <div className="square" onClick={handleClick}>{value}</div>
  )
}

export default Square;