const db = require('./connection');
const { User, Item, ItemAddOn, Killer, KillerAddOn, KillerBuild, KillPerk, Survivor, SurvivorBuild, SurvPerk } = require('../models');

db.once('open', async () => {
    await Item.deleteMany();

    await Item.create({

    })

    console.log('Items seeded');
    
    await ItemAddOn.deleteMany();

    await ItemAddOn.bulkCreate({

    })

    console.log('Item add-ons seeded');

    await Killer.deleteMany();

    await Killer.create({

    })

    console.log('Killers seeded');

    await KillerAddOn.deleteMany();

    await KillerAddOn.bulkCreate({

    })

    console.log('Killer add-ons seeded');

    await KillerBuild.deleteMany();

    await KillerBuild.bulkCreate({

    })

    console.log('Killer Builds seeded');

    await KillPerk.deleteMany();

    await KillPerk.bulkCreate({

    })

    console.log('Killer Perks seeded');

    await Survivor.deleteMany();

    await Survivor.buklkCreate({

    })

    console.log('Survivors seeded');

    await SurvivorBuild.deleteMany();

    await SurvivorBuild.bulkCreate({

    })

    console.log('Survivor Builds seeded');

    await SurvPerk.deleteMany();

    await SurvPerk.bulkCreate({

    })

    console.log('Survivor Perks seeded');

    await User.deleteMany();

    await User.create({
        email: 'katykat5bros@gmail.com',
        password: 'Dizzydog#1',
        survBuilds: survBuilds,
        killBuilds: killBuilds
    });

    console.log('All seeded');

    process.exit();
});