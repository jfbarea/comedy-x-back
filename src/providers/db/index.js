const mongoose = require('mongoose');

const { DATABASE_URL } = process.env;

module.exports = {
  connection: null,
  connect: async () => {
    if (this.connection) return this.connection;
    console.log('Connecting to database...');
    this.client = await mongoose.connect(DATABASE_URL);
    console.log('Database connection established');
  }
}
