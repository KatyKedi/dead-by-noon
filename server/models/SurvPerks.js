const { Schema, model } = require('mongoose');

const SurvPerksSchema = new Schema(
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

const SurvPerks = model('SurvPerks', SurvPerksSchema);

module.exports = SurvPerks;