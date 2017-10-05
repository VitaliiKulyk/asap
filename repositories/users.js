const sequelize = require('../db');
const Users = require('../models').User;
const Orders = require('../models').Order;

const UsersRepository = {
	getAll() {
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
}

module.exports = UsersRepository;
