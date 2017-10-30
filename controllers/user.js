const userService = require('../services/user');

function getUsersWithOrders(req, res){
	return userService.getUsersWithOrders()
	.then(data => res.send(data));
};

module.exports = {
	getUsersWithOrders
}
