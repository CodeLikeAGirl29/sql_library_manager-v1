const Sequelize = require("sequelize");
const path = require("path");
const dbFile = path.resolve(__dirname, "library.db");

module.exports = new Sequelize("Books", "username", "password", {
	host: "localhost",
	dialect: "sqlite",

	pool: {
		max: 5,
		min: 0,
		idle: 10000,
	},

	storage: dbFile,
});
