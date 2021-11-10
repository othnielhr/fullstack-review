const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (/* TODO */) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  // use axios.get

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: 'http://api.github.com',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

}

module.exports.getReposByUsername = getReposByUsername;