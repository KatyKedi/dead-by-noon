const { Schema, model } = require('mongoose');

const SurvivorSchema = new Schema(
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

const Survivor = model('Survivor', SurvivorSchema);

module.exports = Survivor;