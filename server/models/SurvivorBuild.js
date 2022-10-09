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
        survPerks: [
            {
                type: Schema.Types.ObjectId,
                ref: 'SurvPerks'
            }
        ],
        item: {
            type: Schema.Types.ObjectId,
            ref: 'Items'
        },
        addOns: [
            {
                type: Schema.Types.ObjectId,
                ref: 'ItemAddOns'
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