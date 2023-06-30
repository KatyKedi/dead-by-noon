const { Schema, model } = require('mongoose');

const KillerSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        // description: {
        //     type: String,
        //     required: true
        // },
        img: {
            type: String
        },
        // baseSpeed: {
        //     type: Float
        // },
        power: {
            type: String,
            required: true
        },
        link: {
            type: String
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const Killer = model('Killer', KillerSchema);

module.exports = Killer;