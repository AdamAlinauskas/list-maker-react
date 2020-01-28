import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Jumbotron, Button, Navbar, Fade } from "react-bootstrap";
import _ from "lodash";
import ListCard from "./listCard";

class Lists extends Component {
  state = { lists: [] };

  componentDidMount() {
    const lists = [];
    lists.push(
      new List("Scary Movies", "My favorite slasher movies", [
        new ListItem("Scary Movie")
      ]),
      new List("Scary Movies", "My favorite slasher movies", [
        new ListItem("Scary Movie")
      ]),
      new List("Scary Movies", "My favorite slasher movies", [
        new ListItem("Scary Movie")
      ]),
      new List("Scary Movies", "My favorite slasher movies", [
        new ListItem("Scary Movie")
      ]),
      new List("Scary Movies", "My favorite slasher movies", [
        new ListItem("Scary Movie")
      ]),
      new List("Scary Movies", "My favorite slasher movies", [
        new ListItem("Scary Movie")
      ]),
      new List("Scary Movies", "My favorite slasher movies", [
        new ListItem("Scary Movie")
      ]),
      new List("Scary Movies", "My favorite slasher movies", [
        new ListItem("Scary Movie")
      ]),
      new List("Scary Movies", "My favorite slasher movies", [
        new ListItem("Scary Movie")
      ]),
      new List("Scary Movies", "My favorite slasher movies", [
        new ListItem("Scary Movie")
      ]),
      new List("Scary Movies", "My favorite slasher movies", [
        new ListItem("Scary Movie")
      ]),
      new List("Scary Movies", "My favorite slasher movies", [
        new ListItem("Scary Movie")
      ]),
      new List("Scary Movies", "My favorite slasher movies", [
        new ListItem("Scary Movie")
      ]),
      new List("Scary Movies", "My favorite slasher movies", [
        new ListItem("Scary Movie")
      ]),
      new List("Scary Movies", "My favorite slasher movies", [
        new ListItem("Scary Movie")
      ]),
      new List("Scary Movies", "My favorite slasher movies", [
        new ListItem("Scary Movie")
      ])
    );

    this.setState({ lists });
  }

  render() {
    const { lists } = this.state;

    const rows = _.chunk(lists, 3);

    return (
      <React.Fragment>
        <Jumbotron>
          <h1>List Central</h1>
          <p>One stop shop for all your lists</p>
          <p>
            <Button variant="primary">New List</Button>
          </p>
        </Jumbotron>
        <Fade in={true} appear={true} timeout={900}>
          <div>
            {rows.map(row => (
              <Row>
                {row.map((list, pos) => (
                  <ListCard list={list} />
                ))}
              </Row>
            ))}
          </div>
        </Fade>
      </React.Fragment>
    );
  }
}

class List {
  title = "";
  description = "";
  items = [];

  constructor(title, description, items) {
    this.title = title;
    this.description = description;
    this.items = items;
  }
}

class ListItem {
  text = "";
  isComplete = true;
  constructor(text, isComplete) {
    this.text = text;
    this.isComplete = isComplete;
  }
}

export default Lists;
