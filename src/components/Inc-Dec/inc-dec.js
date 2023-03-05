import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./inc-dec.css";

function IncDecCounter() {
  let [num, setNum] = useState(0);

  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <>
      <div className={"holder"}>
        <button onClick={decNum}>
          -
        </button>
        <input
          type="text"
          value={num}
          onChange={handleChange}
        />
        <button onClick={incNum}>
          +
        </button>
      </div>
      <Button variant="light" type="button" style={{ width: "100%" }}>
        Add to Cart
      </Button>
    </>
  );
}

export default IncDecCounter;
