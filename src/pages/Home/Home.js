import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselComponent from "../../components/Carousel/Carousel";

function Home() {
  return (
    <Container>
      <Row className="mt-4">
        <Col md="5">
          <div className="bannerDiv">
            <div>
              <div className="bannerDivMainText">
                Clearance Sale! Get upto 50% off
              </div>
              <div className="bannerDivSubText">
                We have lowered our prices.
              </div>
              <div className="bannerDivButton">Shop Now</div>
            </div>
          </div>
        </Col>
        <Col md="7">
          <CarouselComponent></CarouselComponent>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
