const sequelize = require('../db');
const Users = require('../models').User;
const Orders = require('../models').Order;

module.exports = app => {
	app.get('/data', (req, res) => {
		Users.find({
			where: {id: 1},
			include: [{
				model: Orders,
				as: 'orders'
			}],
			raw: true
		  })
		.then(console.log)
	});
}
// include: [{
// 	model: models.User,
// 	as: 'User'
// }, {
// 	model: models.User,
// 	as: "Friend"
// }]
