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
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    timestamps: true,
});

module.export = model('Dev', DevShema);