const { Schema, model } = require('mongoose');

const KillPerkSchema = new Schema(
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

const KillPerk = model('KillPerk', KillPerkSchema);

module.exports = KillPerk;