const orderService = require('../services/order');

function getOrders(req, res){
	orderService.getAll()
	.then(data => res.send(data));
};

module.exports = {
	getOrders
}
