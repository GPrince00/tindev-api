const { Schema, model } = require('mongoose');

const DevShema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        require: true,
    },
    bio: String,
    avatar: {
        type: String,
        require: true,
    },
}, {
    timestamps: true,
});

module.export = model('Dev', DevShema);