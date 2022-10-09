const { Schema, model } = require('mongoose');

const KillPerksSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const KillPerks = model('KillPerks', KillPerksSchema);

module.exports = KillPerks;