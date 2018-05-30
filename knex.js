const settings = require("./settings"); // settings.json
var knex = require('knex')({
  client: 'pg',
  connection: {
  host : settings.hostname,
  user : settings.user,
  password : settings.password,
  database : settings.database
  }
});

const person = process.argv[2];
console.log("Searching for: " + person);

knex('famous_people')
.insert({first_name: process.argv[2], last_name: process.argv[3], birthdate: process.argv[4]})
.then((result) => {
  knex.destroy()
})
