const { Schema, model } = require('mongoose');

const KillerAddOnsSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        killer: {
            type: Schema.Types.ObjectId,
            ref: 'Killer'
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

const KillerAddOns = model('KillerAddOns', KillerAddOnsSchema);

module.exports = KillerAddOns;