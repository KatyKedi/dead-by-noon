const { Schema, model } = require('mongoose');

const KillerAddOnSchema = new Schema(
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

const KillerAddOn = model('KillerAddOn', KillerAddOnSchema);

module.exports = KillerAddOn;