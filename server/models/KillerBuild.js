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
        killer: {
            type: Schema.Types.ObjectId,
            ref: 'Killer'
        },
        perks: [
            {
                type: Schema.Types.ObjectId,
                ref: 'KillPerk'
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