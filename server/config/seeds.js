const db = require('./connection');
const { User, KillPerks } = require('../models');

db.once('open', async () => {
    await KillPerks.deleteMany();

    await KillPerks.create({
        name: ''
    })

    await User.deleteMany();

    await User.create({
        email: 'katykat5bros@gmail.com',
        password: 'Dizzydog#1',
        survBuilds: survBuilds,
        killBuilds: killBuilds
    });

    console.log('users seeded');

    process.exit();
});