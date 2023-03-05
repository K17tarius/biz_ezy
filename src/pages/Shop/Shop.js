import "./Shop.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IncDecCounter from "../../components/Inc-Dec/inc-dec";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

function Shop() {
  var [items, setItems] = useState([
    {
      image: "/images/1.jpg",
      name: "Taylor",
      price: "₹1200",
    },
    {
      image: "/images/1.jpg",
      name: "Taylor",
      price: "₹1200",
    },
    {
      image: "/images/1.jpg",
      name: "Taylor",
      price: "₹1200",
    },
  ]);
  return (
    <div>
      <Container>
        <Row className="mt-4">
          {items.map((el, i) => {
            return (
              <>
                <Col md="3">
                  <div className={"itemCard"}>
                    <div className="itemCardImageBox" style={{backgroundImage: 'url(' + el.image + ')'}}></div>
                    <div className="itemCardTitle">{el.name}</div>
                    <div className="itemCardPrice">{el.price}</div>
                    <IncDecCounter></IncDecCounter>
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default Shop;
