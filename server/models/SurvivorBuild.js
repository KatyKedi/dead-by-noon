const { Schema, model } = require('mongoose');

const SurvivorBuildSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        perks: [
            {
                type: Schema.Types.ObjectId,
                ref: 'SurvPerk'
            }
        ],
        item: {
            type: Schema.Types.ObjectId,
            ref: 'Item'
        },
        addOns: [
            {
                type: Schema.Types.ObjectId,
                ref: 'ItemAddOn'
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

const SurvivorBuild = model('SurvivorBuild', SurvivorBuildSchema);

module.exports = SurvivorBuild;