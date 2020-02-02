import React, { Component } from "react";
import MaterialIcon from "@material/react-material-icon";

class ListItemComponent extends Component {
  state = {
    text: "",
    isComplete: true
  };

  componentDidMount() {
    const { text, isComplete } = this.props.item;
    console.log(this.props.item);
    this.setState({ text, isComplete });
  }

  handleClick = () => {
    this.setState({ isComplete: !this.state.isComplete });
    this.props.onClick(this.props.item);
  };

  render() {
    const { text, isComplete } = this.state;
    const icon = isComplete ? "check_box" : "check_box_outline_blank";
    return (
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        onClick={this.handleClick}
      >
        {text}
        <MaterialIcon icon={icon}></MaterialIcon>
      </li>
    );
  }
}

export default ListItemComponent;
