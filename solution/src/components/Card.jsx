import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Language from "./Language";
import { data } from "../Helper/data";

const Card = () => {
  console.log(data);
  return (
    <Container>
      <h1>Languages</h1>
      <Row>
        {data.map((language, index) => {
          return (
            <Col sm={6} md={4} lg={3} key={index}>
              <Language {...language} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Card;
