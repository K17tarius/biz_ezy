import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import Cookies from "universal-cookie";
import "./cart.css";

function ShoppingCart(){

  const cookies = new Cookies();
  var [cart, setCart] = useState([]);
  var [total, setTotal] = useState(0);

  useEffect(()=>{
    var crt = cookies.get('cart') ? cookies.get('cart') : []
    setCart(crt)

    var ttl = 0
    for(var i = 0;i< crt.length; i++){
      ttl+= crt[i].price * crt[i].count
    }
    setTotal(ttl);

  }, [])

  return (
    <>
    <Container>
        <Row className="mt-4">
          <Col md="12">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                  <th>Price Per Item</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((el, i) => {
                  return (
                    <>
                      <tr>
                        <td>{i + 1}</td>
                        <td>{el.name}</td>
                        <td>{el.count}</td>
                        <td> Rs {el.price}</td>
                        <td> Rs {el.price * el.count}</td>
                      </tr>
                    </>
                  );
                })}
                <tr>
                  <td colspan="4"><b>Sum Total</b></td>
                  <td> Rs {total}</td>
                </tr>
              </tbody>
            </Table>
            <Button
              onClick={() => {
              }}
            >
              Buy
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ShoppingCart;