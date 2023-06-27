const { Schema, model } = require('mongoose');

const SurvivorPerkSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        abilities: {
            type: String,
            required: true
        },
        img: {
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

const SurvivorPerk = model('SurvivorPerk', SurvivorPerkSchema);

module.exports = SurvivorPerk;