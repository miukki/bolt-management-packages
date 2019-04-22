'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./foo.cjs.prod.js");
} else {
  module.exports = require("./foo.cjs.dev.js");
}
