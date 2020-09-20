import { pool } from './pool';

class Model {
  constructor(table) {
    this.pool = pool;
    this.table = table;
    this.pool.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
  }

  async selectAll() {
    let query = `SELECT * FROM ${this.table}`;
    return this.pool.query(query);
  }

  async selectWithFilters( filterParams ) {
    console.log( filterParams );
    let query = `SELECT * FROM ${this.table}`;
    if( filterParams.location ) {
      query += ` WHERE location='${filterParams.location}'`;
      if( filterParams.tag ) {
        query += ` AND tag='${filterParams.tag}'`;
      }
    } else if( filterParams.tag ) {
      query += ` WHERE tag='${filterParams.tag}'`;
    }
    return this.pool.query(query);
  }
}

export default Model;