import { AjnaElement } from "ajna";

export default class HelloWorld extends AjnaElement {
  constructor () {
    super();
  }

  template () {
    return require("./HelloWorld.html")
  }
}