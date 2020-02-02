import React, { Component } from "react";
import ListsService from "../service/listsService";
import ListItemComponent from "./listItemComponent";

class EditList extends Component {
  state = { list: { title: "", items: [], newItem: "" } };
  listService = null;
  constructor() {
    super();
    this.listService = new ListsService();
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    const list = { ...this.listService.getList(id) };
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
    console.log(this.state.newItem);
    list.items = items;
    this.setState({ list, newItem: "" });
  };

  handleSave = () => {
    const { history } = this.props;

    this.listService.save({ ...this.state.list });

    history.replace("/");
  };

  handleToggleItemIsComplete = itemToUpdate => {
    const { list } = { ...this.state };
    const index = list.items.indexOf(itemToUpdate);
    const item = { ...list.items[index] };
    item.isComplete = !item.isComplete;
    list.items[index] = item;

    console.log(item);
    console.log(list);

    this.setState({ list });
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
                  autoFocus
                  value={this.state.newItem}
                  onChange={({ target }) =>
                    this.setState({ newItem: target.value })
                  }
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="btn btn-outline-secondary"
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
              {items.map((item, pos) => {
                return (
                  <ListItemComponent
                    key={item.text}
                    item={item}
                    onClick={this.handleToggleItemIsComplete}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button
              onClick={this.handleSave}
              className="btn btn-dark mt-3 col-md-12"
            >
              Save
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EditList;
