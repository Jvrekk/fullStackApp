const mongoose = require('mongoose'),
    Order = mongoose.model('Order');

const cors = require('cors');

exports.listAllOrders = (req, res) => {
    Order.find({}, (err, order) => {
        if(err)
            res.send(err);
        res.json(order);
    });
};

exports.createOrder = (req, res) => {
    let newOrder = new Order(req.body);

    newOrder.save((err, order) => {
        if(err)
            res.send(err);
        res.json(order);
    });
};

exports.readOrder = (req, res) => {
    Order.findById(req.params.orderId, (err, order) => {
        if(err)
            res.send(err);
        res.json(order);
    });
};

exports.updateOrder = (req, res) => {
    Order.findByIdAndUpdate({_id: req.params.orderId}, req.body, {new: true}, (err, order) => {
        if(err)
            res.send(err);
        res.json(order);
    });
};

exports.deleteOrder = (req, res) => {
    Order.findByIdAndRemove(req.params.orderId, (err, order) => {
        if(err)
            res.send(err);
        res.json({
            message: "Order successfully deleted",
            id: order._id
        })
    })
}