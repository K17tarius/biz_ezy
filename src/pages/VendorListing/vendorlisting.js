import "./vendorlisting.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function Vendorlisting() {
  const currentVendorId = "123";

  var [listing, setListing] = useState([]);
  var [loaded, setLoaded] = useState(false);

  const getAllItems = async () => {
    const q = query(
      collection(db, "items"),
      where("addedBy", "==", currentVendorId)
    );
    const querySnapshot = await getDocs(q);
    var myItems = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      myItems.push({
        itemId: doc.data().itemId,
        itemName: doc.data().itemName,
        quantity: doc.data().itemQuantity,
        price: doc.data().itemPrice,
        dateAdded: doc.data().itemAddedOn.toDate(),
      });
    });

    setListing(myItems);
    setLoaded(true);
  };

  function openAddPage(){
    window.open('/addproduct',"_self")
  }

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <div>
      <Container>
        <Row className="mt-4">
          <Col md="12">
            {loaded == false && (
              <>
                <div>Loading...</div>
              </>
            )}
            {loaded == true && (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Item ID</th>
                    <th>Item Name</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Added At</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {listing.map((el, i) => {
                    return (
                      <>
                        <tr>
                          <td>{i + 1}</td>
                          <td>{el.itemId}</td>
                          <td>{el.itemName}</td>
                          <td>{el.quantity}</td>
                          <td>{el.price}</td>
                          <td>{el.dateAdded.toString()}</td>
                          <td>
                            <u>Edit</u> <u>Remove</u>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
            )}
            <Button onClick={()=>{openAddPage()}}>Add Product</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Vendorlisting;
