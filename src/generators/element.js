const fs = require("fs")
export function createElm (elmName, options) {
  console.log("Options: ", options)

  // Check if directory exist for components
  // src and components

  let dir = options.dir;

  let res = fs.existsSync(dir+"/src");

  if(!res) {
    fs.mkdirSync(dir+"/src");
    fs.mkdirSync(dir+"/src/components")
  }

  // convert name to camel case if not in proper format

  isCamelCased(elmName)
  if(isDashSaperated(elmName)) {
    elmName = camelize(elmName)
  }

  
  if(!fs.existsSync(dir+"/src/components/"+elmName)) {
    fs.mkdirSync(dir+"/src/components/"+elmName);
  } else {
    throw Error("It seems like component already exists")
  }

  fs.writeFileSync(dir+"/src/components/"+elmName+"/"+elmName+".html", `<template>
  <div>

  <div>
</template>`) 

  fs.writeFileSync(dir+"/src/components/"+elmName+"/"+elmName+".js", `import { AjnaElement } from "ajna";

export default class ${elmName} extends AjnaElement {

  constructor () {
    super();
  }

  template () {
    return require("./${elmName}.html")
  }

}`)
}

function isCamelCased (name) {
  let dashedNameReg = /^[A-Z]/;
  return dashedNameReg.test(name);
}

function isDashSaperated (name) {
  let dashedNameReg = /^[a-z].*-./;
  return dashedNameReg.test(name);
}

function isValidName (name) {
  if(name.contains(" ")) return false;
} 

function camelize(name) {

  let slices = name.split("-")

  for(let i = 0; i<slices.length;i++) {
    slices[i] = slices[i].charAt(0).toUpperCase() + slices[i].substr(1);
  }

  return slices.join("");
}
