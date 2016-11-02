const Sequelize = require('sequelize');

// setting up a sequel connection pool using postgres as the dialect

//  Make sure to 'createdb lendrdb' in your Lendr repo folder to create initial database
//  Set credentials below to your computer's username and password
<<<<<<< HEAD
const sequelize = new Sequelize('mxtigtyr', 'mxtigtyr', 'XXX-4221cEj6_26wzIhYK8fMMmdqzliz', {
 host: 'elmer-02.db.elephantsql.com',
 dialect: 'postgres'
=======

const sequelize = new Sequelize('lendrdb', 'edward', 'password', {
  host: 'localhost',
  dialect: 'postgres'
>>>>>>> 7fa259602cc916c19814bb50ff9e3d4998149fe4
});
// const sequelize = new Sequelize('mxtigtyr', 'mxtigtyr', 'XXX-4221cEj6_26wzIhYK8fMMmdqzliz', {
//    host: 'elmer-02.db.elephantsql.com',
//    dialect: 'postgres'
//  });

// authenticating that the sequel connection was successfully created
sequelize
  .authenticate()
  .then(function (err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize;
