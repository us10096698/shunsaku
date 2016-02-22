'use strict';

function say(req, res) {
  res.send('Say hello from server! Your query: ' + req.query.message);
}

module.exports = {
  say: say
};
