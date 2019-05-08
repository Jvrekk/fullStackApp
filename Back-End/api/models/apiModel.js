const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    title: {
        type: String,
        required: "Enter title of order"
    },
    description: {
        type: String,
        required: "decsription of what is it"
    },
    date:{
        type: Date,
        default: Date.now
    },
    weight: {
        type: Number,
        required: "Enter weight of Order"
    }
});

module.exports = mongoose.model('Order', OrderSchema);