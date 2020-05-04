const Twit = require("twit");
const config = require("../config");
const T = new Twit(config.configApp);

module.exports = T;