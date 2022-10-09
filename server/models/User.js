const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const SurvivorBuild = require('./SurvivorBuild');
const KillerBuild = require('./KillerBuild')

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        survBuilds: [SurvivorBuild.schema],
        killBuilds: [KillerBuild.schema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// set up pre-save middleware to create password
UserSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

  // compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

// get total count of survivor builds on retrieval
UserSchema.virtual('survBuildCount').get(function() {
    return this.survBuilds.length
});

// get total count of killer builds on retrieval
UserSchema.virtual('killBuildCount').get(function() {
    return this.killBuilds.length
});


const User = model('User', UserSchema);

module.exports = User;