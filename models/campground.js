const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampGroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    locations: String
})

module.exports = mongoose.model('Campground', CampGroundSchema)