const { Schema, model } = require('mongoose');

const KillerSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        speed: {
            type: Float
        },
        addOns: [
            {
                type: Schema.Types.ObjectId,
                ref: 'KillerAddOns'
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