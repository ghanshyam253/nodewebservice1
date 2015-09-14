var mongoose = require('mongoose');

mongoose.connect("mongodb://testdbusername:testdbpassword@ds061777.mongolab.com:61777/testdatabasename");


module.exports = mongoose.connection;