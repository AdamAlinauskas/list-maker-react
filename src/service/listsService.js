import { ListItem } from "../domain/listItem";
import { List } from "../domain/list";

const lists = [];
lists.push(
  new List("Scary Movies", "My favorite slasher movies", [
    new ListItem("Scary Movie"),
    new ListItem("Terminator"),
    new ListItem("Gremlins"),
    new ListItem("Friday 13th"),
    new ListItem("Jason")
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

class ListsService {
  all = () => {
    return [...lists];
  };

  getList(id) {
    console.log(lists);
    console.log(lists.find(x => x.id === id));
    return { ...lists.find(x => x.id === id) };
  }
}

export default ListsService;
