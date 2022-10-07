const { Schema, model } = require('mongoose');

const KillerSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        killPerks: [
            {
                type: Schema.Types.ObjectId,
                ref: 'KillPerks'
            }
        ],
        addOns: [
            {
                type: Schema.Types.ObjectId,
                ref: 'AddOns'
            }
        ]
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