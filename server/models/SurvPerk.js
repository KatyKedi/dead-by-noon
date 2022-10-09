const { Schema, model } = require('mongoose');

const SurvPerkSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        survivor: {
            type: Schema.Types.ObjectId,
            ref: 'Survivor'
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