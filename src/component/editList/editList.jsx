import React, { Component } from "react";
import ListsService from "../../service/listsService";
import ListItemComponent from "../listItemComponent";
import { toast } from "react-toastify";
import Title from "./title";
import AddListItem from "./addListItem";

class EditList extends Component {
  state = { list: { title: "", items: [] } };
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

  handleAddItem = text => {
    // e.preventDefault();

    const list = { ...this.state.list };

    var items = [{ text: text }, ...this.state.list.items];
    console.log(text);
    list.items = items;
    this.setState({ list, newItem: "" });
  };

  handleSave = () => {
    const { history } = this.props;

    this.listService.save({ ...this.state.list });

    history.replace("/");
    toast.success("Saved :)");
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
        <Title onChange={this.handleTitleChange} title={title} />
        <AddListItem onAddItem={this.handleAddItem} />
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
