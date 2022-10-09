const { Schema, model } = require('mongoose');

const ItemAddOnsSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        item: {
            type: Schema.Types.ObjectId,
            ref: 'Items'
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

const ItemAddOns = model('ItemAddOns', ItemAddOnsSchema);

module.exports = ItemAddOns;