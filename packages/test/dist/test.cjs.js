'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./test.cjs.prod.js");
} else {
  module.exports = require("./test.cjs.dev.js");
}
