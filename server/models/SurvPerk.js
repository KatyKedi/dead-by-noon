const { Schema, model } = require('mongoose');

const SurvPerkSchema = new Schema(
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

const SurvPerk = model('SurvPerk', SurvPerkSchema);

module.exports = SurvPerk;