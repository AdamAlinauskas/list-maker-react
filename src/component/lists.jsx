import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import { Jumbotron, Button, Fade } from "react-bootstrap";
import _ from "lodash";
import ListCard from "./listCard";
import ListsService from "../service/listsService";
import { Link } from "react-router-dom";

class Lists extends Component {
  state = { lists: [] };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({ lists: new ListsService().all() });
  }

  render() {
    const { lists } = this.state;
    if (lists.length === 0) return <div>no list</div>;

    const rows = _.chunk(lists, 3);

    return (
      <React.Fragment>
        <Jumbotron>
          <h1>List Central</h1>
          <p>One stop shop for all your lists</p>
          <p>
            <Link className="btn btn-primary" to="lists/new">
              New List
            </Link>
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

export default Lists;
