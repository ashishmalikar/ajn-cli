#!/usr/bin/env node
require = require("esm")(module)
require('../src').ajnaCli(process.argv)