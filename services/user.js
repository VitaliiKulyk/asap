const sequelize = require('../db');
const Users = require('../models').User;
const Orders = require('../models').Order;

const addUser = user => Users.create(user);
const getUserByLogin = login => Users.findOne({where: {login}});

const getUsersWithOrders = () => {
	return Users.findAll({
		attributes: ['login', 'id'],
		include: [{
			model: Orders,
			as: 'orders',
			attributes: ['date', 'title']
		}],
	})
	.then(sequelize.getValues);
}

module.exports = {
	addUser,
	getUsersWithOrders,
	getUserByLogin
}
