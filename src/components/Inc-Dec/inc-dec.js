import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

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
      <Row className="mt-4">
        <Col md="2">
          <button
            class="btn btn-outline-primary"
            type="button"
            onClick={decNum}
          >
            -
          </button>
        </Col>
        <Col md="8">
          <input
            type="text"
            class="form-control"
            value={num}
            onChange={handleChange}
          />
        </Col>
        <Col md="2">
          <button
            class="btn btn-outline-primary"
            type="button"
            onClick={incNum}
          >
            +
          </button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12" >
          <Button
            variant="light"
            type="button"
            style={{width:"100%"}}
          >
            Add to Cart
          </Button>
        </Col>
        </Row>
    </>
    
  );
}

export default IncDecCounter;
