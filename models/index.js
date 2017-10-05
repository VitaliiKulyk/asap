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
//
User.hasMany(Order, {foreignKey: 'user_id'});
// User.hasMany(Order, { as: 'orders'});
// Model.hasMany(part, {foreignKey: 'assetserviceid'});
// return Model.findAll({
//   where: {$and: [..._.map(condition.filters, (node, key) => ({[key]: node})), condition.tenantid ? {tenantid: condition.tenantid} : {}]},
//   include: [{
// 	model: part,
// 	as: 'parts',
// 	attributes: ['name', 'price', 'number', 'quantity']
//   }]
// });
// Order.belongsTo(User,  {foreignKey: 'user_id', as: 'orders'})

module.exports = {
	User,
	Order
}
