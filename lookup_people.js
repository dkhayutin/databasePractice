const pg = require("pg");
const settings = require("./settings"); // settings.json
const client = new pg.Client({

  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const findPerson = require('./fpname')(client)
client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  findPerson.findByName(process.argv[2], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }

    var arr = result.rows;
    arr.forEach(function(results) {
      console.log(`${results.id}: ${results.first_name} ${results.last_name}, born '${results.birthdate.toLocaleDateString()}'`);
    });

    client.end();
  });
  });
