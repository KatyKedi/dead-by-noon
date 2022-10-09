const { Schema, model } = require('mongoose');

const KillerBuildSchema = new Schema(
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

const KillerBuild = model('KillerBuild', KillerBuildSchema);

module.exports = KillerBuild;