/* jshint esversion:8 */
const db = require('./conn.js');

class Restaurant {
  constructor(id, name, street, city, state, menu){
    this.id = id;
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
    this.menu = menu;
  }

  async getAll(){
    try {
      const query = `select * from restaurants`;
      const res = await db.result(query);
    } catch (err) {
      return err.message;
    }
  }
}
module.exports = Restaurant;
