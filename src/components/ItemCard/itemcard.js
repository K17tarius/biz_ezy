import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./itemcard.css";
import { Toast, ToastContainer } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

function ItemCard(props) {
  let [num, setNum] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const buyProduct = async () => {
    console.log(props.cardData)
    console.log(num)

    if(props.cardData.stock - num < 0){
      showToastMessage('Quantity more than stock, cannot buy!');
    }
    else{
      const itemRef = doc(db, "items", props.cardData.id);
      await updateDoc(itemRef, {
        itemQuantity: (props.cardData.stock - num)
      });
      showToastMessage('Bought ' + num + ' items!');
    }
  }

  function showToastMessage(msg) {
    setToastMessage(msg);
    setShowToast(true);
    window.setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }

  
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
      <Col md="2">
        <div className={"itemCard"}>
          <div
            className="itemCardImageBox"
            style={{ backgroundImage: "url(" + props.cardData.image + ")" }}
          ></div>
          <div className="itemCardTitle">{props.cardData.name}</div>
          <div className="itemCardPrice">{props.cardData.price}</div>
          <div className={"holder"}>
            <button onClick={decNum}>-</button>
            <input type="text" value={num} onChange={handleChange} />
            <button onClick={incNum}>+</button>
          </div>
          <Button
            variant="light"
            type="button"
            style={{ width: "100%", marginTop: "10px" }}
          >
            Add to Cart
          </Button>
          <Button
            variant="light"
            type="button"
            style={{ width: "100%", marginTop: "10px" }}
            onClick={()=>{buyProduct()}}
          >
            Buy
          </Button>
        </div>
      </Col>

      <ToastContainer className="p-3" position={"bottom-center"}>
        <Toast
          show={showToast}
          onClose={() => {
            setShowToast(false);
          }}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
              onClick={() => {
                setShowToast(false);
              }}
            />
            <strong className="me-auto">Message</strong>
          </Toast.Header>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default ItemCard;
