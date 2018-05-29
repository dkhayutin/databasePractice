
module.exports = function(client) {

  function findByName(name, callback) {
    const query = "SELECT * from famous_people WHERE(first_name ILIKE $1) OR (last_name ILIKE $1)";
    client.query(query, [`%${name}%`], callback);
  }

  return {
    findByName : findByName
  }

}
