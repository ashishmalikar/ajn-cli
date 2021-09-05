import { createApp } from "./generators/app";
import { createElm } from "./generators/element";

const chalk = require("chalk")
const program = require("commander")

export function ajnaCli(args) {
  // console.log("Ajna Cli Called: ", args)

  program
    .command("create-app <appName>")
    .action(function(appName, options){

      options = {
        ...options,
        dir: getDir()
      }

      console.log("Creating application with name: ", appName)
      console.log("With Options: ", options)
      createApp(appName, options)
    });

  program
  .command("create-elm <elmName>")
  .action(function(elmName, options){

    options = {
      ...options,
      dir: getDir()
    }

    console.log("Create element with name: ", elmName)
    console.log("With Options: ", options)
    createElm(elmName, options)
  })  

  program
    .option("-e, --elm", "Create Element")
    .option("-a, --app", "Create App")
    .option("-ilt, --inline-template")
    .option("-nm, --namespace", "Namespace for which you want to create element")
  
    program.opts()

    program.parse(args)
}

function getDir () {
  return process.cwd()
}