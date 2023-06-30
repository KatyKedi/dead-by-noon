const { Schema, model } = require('mongoose');

const SurvivorSchema = new Schema(
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

const Survivor = model('Survivor', SurvivorSchema);

module.exports = Survivor;