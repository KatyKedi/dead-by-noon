const db = require('./connection');
const { User, Item, ItemAddOn, Killer, KillerAddOn, KillerBuild, KillPerk, Survivor, SurvivorBuild, SurvPerk } = require('../models');

db.once('open', async () => {
    await Item.deleteMany();

    await Item.create({

    })
    
    await ItemAddOn.deleteMany();

    await ItemAddOn.create({

    })

    await Killer.deleteMany();

    await Killer.create({

    })

    await KillerAddOn.deleteMany();

    await KillerAddOn.create({

    })

    await KillerBuild.deleteMany();

    await KillerBuild.create({

    })
    
    
    await KillPerk.deleteMany();

    await KillPerk.create({

    })

    await Survivor.deleteMany();

    await Survivor.create({

    })

    await SurvivorBuild.deleteMany();

    await SurvivorBuild.create({

    })

    await SurvPerk.deleteMany();

    await SurvPerk.create({

    })

    await User.deleteMany();

    await User.create({
        email: 'katykat5bros@gmail.com',
        password: 'Dizzydog#1',
        survBuilds: survBuilds,
        killBuilds: killBuilds
    });

    console.log('seeded');

    process.exit();
});