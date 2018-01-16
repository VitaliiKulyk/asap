const orderService = require('../services/order');

function getOrders(req, res){
	orderService.getAll()
	.then(data => res.send(data));
};

function getOrder(req, res){
	orderService.getById(req.params.id)
	.then(data => res.send(data));
}

function addOrder(req, res){
	orderService.add({
		title: req.body.title,
		user_id: 1
	})
	.then(data => res.send(data));
};

module.exports = {
	getOrders,
	getOrder,
	addOrder
}
