const { Schema, model } = require('mongoose');

const ItemAddOnSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        item: {
            type: Schema.Types.ObjectId,
            ref: 'Item'
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

const ItemAddOn = model('ItemAddOn', ItemAddOnSchema);

module.exports = ItemAddOn;