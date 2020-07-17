module.exports = {
  apps : [{
    script: 'node app.js',
  }, {
    script: 'json-server services/users/db.json --port 3001',
  }, {
    script: 'json-server services/movies/db.json --port 3002'
  }]
};
