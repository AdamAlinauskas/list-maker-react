import React, { Component } from "react";
import ListsService from "../service/listsService";

class EditList extends Component {
  state = { list: { items: [], newItem: "" } };

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    const list = { ...new ListsService().getList(id) };
    this.setState({ list });
  }

  handleTitleChange = event => {
    const list = this.state.list;
    list.title = event.target.value;
    this.setState({ list });
  };

  handleAddItem = e => {
    e.preventDefault();

    const list = { ...this.state.list };

    var items = [{ text: this.state.newItem }, ...this.state.list.items];
    list.items = items;
    this.setState({ list, newItem: "" });
  };

  render() {
    const { title, items } = this.state.list;

    // var itemsaf = items.map(x => x.title);

    return (
      <React.Fragment>
        <div className="row mb-3">
          <div className="col" style={{ textAlign: "center" }}>
            <input
              style={{ textAlign: "center" }}
              placeholder="Title"
              type="text"
              className="input-field input-title"
              value={title}
              onChange={this.handleTitleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <form onSubmit={this.handleAddItem}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="New Item"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  autofocus
                  value={this.state.newItem}
                  onChange={({ target }) =>
                    this.setState({ newItem: target.value })
                  }
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-md-6">
            <ul className="list-group">
              {items.map((item, pos) => (
                <li
                  key={pos}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-dark mt-3 col-md-12">Save</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EditList;
