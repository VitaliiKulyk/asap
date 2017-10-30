const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
	login: Sequelize.STRING,
	password: Sequelize.STRING,
});

const Order = sequelize.define('order', {
	title: Sequelize.STRING,
	date: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW
	},
	user_id: {
		type: Sequelize.INTEGER,
		references: {
			model: User,
			key: 'id'
		}
	}
});

User.hasMany(Order, {foreignKey: 'user_id'});

module.exports = {
	User,
	Order
}
