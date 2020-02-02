import { ListItem } from "../domain/listItem";
import { List } from "../domain/list";

const lists = [];
lists.push(
  new List("Scary Movies", "My favorite slasher movies", [
    new ListItem("Scary Movie"),
    new ListItem("Terminator", true),
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
    return { ...lists.find(x => x.id === id) };
  }

  save(list) {
    const index = lists.indexOf(lists.find(x => x.id === list.id));
    console.log(list.id);
    lists[index] = list;
  }
}

export default ListsService;
