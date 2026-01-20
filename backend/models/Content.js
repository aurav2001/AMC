const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    // Using Object type allows for flexibility as the frontend structure evolves.
    // This acts as a singleton store for the entire website's dynamic content.
    home: {
        type: Object,
        default: {}
    },
    plans: {
        type: Object,
        default: {}
    },
    software: {
        type: Object,
        default: {}
    },
    hardware: {
        type: Object,
        default: {}
    },
    contact: {
        type: Object,
        default: {}
    },
    general: {
        type: Object,
        default: {}
    },
    about: {
        type: Object,
        default: {}
    }
}, {
    timestamps: true,
    minimize: false // Prevent empty objects from being dropped
});

module.exports = mongoose.model('Content', ContentSchema);
