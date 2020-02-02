export class ListItem {
  text = "";
  isComplete = true;
  constructor(text, isComplete = false) {
    this.text = text;
    this.isComplete = isComplete;
  }
}
