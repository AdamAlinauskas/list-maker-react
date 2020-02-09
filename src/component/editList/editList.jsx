import React, { Component } from "react";
import ListsService from "../../service/listsService";
import { toast } from "react-toastify";
import Title from "./title";
import AddListItem from "./addListItem";
import ListItems from "./listItems";
import Description from "./description";
import Save from "./save";

class EditList extends Component {
  state = { list: { title: "", description: "", items: [] } };
  listService = null;

  constructor() {
    super();
    this.listService = new ListsService();
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    if (id !== "new") {
      const list = { ...this.listService.getList(id) };
      this.setState({ list });
    }
  }

  handleTitleChange = event => {
    const list = { ...this.state.list };
    list.title = event.target.value;
    this.setState({ list });
  };

  handleAddItem = text => {
    const list = { ...this.state.list };
    var items = [{ text: text }, ...this.state.list.items];
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

  handleDescriptionChange = description => {
    const list = { ...this.state.list };
    list.description = description;
    this.setState({ list: list });
  };

  render() {
    const { title, description, items } = this.state.list;
    return (
      <React.Fragment>
        <Title onChange={this.handleTitleChange} title={title} />
        <Description
          description={description}
          onDescriptionChange={this.handleDescriptionChange}
        />

        <AddListItem onAddItem={this.handleAddItem} />
        <ListItems
          items={items}
          onToggleItemIsComplete={this.handleToggleItemIsComplete}
        />
        <Save onSave={this.handleSave} />
      </React.Fragment>
    );
  }
}

export default EditList;
