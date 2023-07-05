const { Schema, model } = require('mongoose');

const KillerBuildSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        killer: {
            type: Schema.Types.ObjectId,
            ref: 'Killer'
        },
        perks: [
            {
                type: Schema.Types.ObjectId,
                ref: 'KillerPerk'
            }
        ],
        addOns: [
            {
                type: Schema.Types.ObjectId,
                ref: 'KillerAddOns'
            }
        ],
        video: {
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

const KillerBuild = model('KillerBuild', KillerBuildSchema);

module.exports = KillerBuild;