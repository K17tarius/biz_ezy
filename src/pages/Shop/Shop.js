import "./Shop.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IncDecCounter from "../../components/Inc-Dec/inc-dec";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { collection, getDocs  } from "firebase/firestore"; 
import { db } from "../../firebase";

function Shop() {
  var [items, setItems] = useState([]);

  const getAllItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    var myItems = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      myItems.push(
        {
          image: doc.data().itemImage,
          name: doc.data().itemName,
          price: doc.data().itemPrice,
        }
      )
    });

    console.log(myItems)
    setItems(myItems);
  }


  useEffect(()=>{
    getAllItems();
  }, [])

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
