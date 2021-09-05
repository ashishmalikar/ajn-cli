import { AjnaElement } from "ajna";

export default class App extends AjnaElement {
  constructor () {
    super();
  }

  template () {
    return require("./App.html")
  }
}