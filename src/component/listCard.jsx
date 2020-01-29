import React from "react";
import { Col, Badge } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ListCard = ({ list }) => {
  return (
    <Col md={4}>
      <Card
        bg=" "
        text="black"
        style={
          {
            /*width: "18rem"*/
          }
        }
      >
        <Card.Header>
          {list.title} <Badge variant="warning">7</Badge>
        </Card.Header>
        <Card.Body>
          {/* <Card.Title>Favorite Movies</Card.Title> */}
          <Card.Text>{list.description}</Card.Text>
          <Link to={`/lists/${list.id}`}>Edit</Link>
        </Card.Body>
      </Card>
      <br />
    </Col>
  );
};

export default ListCard;
