const { Schema, model } = require('mongoose');

const KillerPerkSchema = new Schema(
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

const KillerPerk = model('KillerPerk', KillerPerkSchema);

module.exports = KillerPerk;