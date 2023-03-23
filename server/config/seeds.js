import db from './connection';
import { User, Item, ItemAddOn, Killer, KillerAddOn, KillerBuild, KillPerk, Survivor, SurvivorBuild, SurvPerk } from '../models';
import { items, itemaddons, survivors, survperks, killers, killperks, killaddons } from './helpers.js'

const survivorbuilds = [
    {
        name: 'Locker Knocker',
        description: `Jump in and out of lockers like its nobody's business`,
        perks: [survperks[0], survperks[1], survperks[2], survperks[3]],
        item: items[0],
        addOns: [itemaddons[0], itemaddons[1]]
    },
    {
        name: 'Sneaky Link',
        description: `Run around without a trace`,
        perks: [survperks[4], survperks[5], survperks[6], survperks[7]],
        item: items[1],
        addOns: [itemaddons[3], itemaddons[4]]
    }
]

const killerbuilds = [
    {
        name: 'Brutal Bitch',
        description: `Lots of one hit downs`,
        killer: killers[0],
        perks: [killperks[0], killperks[1], killperks[2], killperks[3]],
        addOns: [poweraddons[0], poweraddons[1]]
    },
    {
        name: 'Fast and Furious',
        description: `Increased moving pace`,
        killer: killers[1],
        perks: [killperks[5], killperks[6], killperks[7], killperks[8]],
        addOns: [poweraddons[1], poweraddons[2]]
    }
]

db.once('open', async () => {

    await Item.deleteMany();
    await Item.insertMany(items)
    console.log('Items seeded');
    
    await ItemAddOn.deleteMany();
    await ItemAddOn.insertMany(itemaddons)
    console.log('Item add-ons seeded');

    await KillPerk.deleteMany();
    await KillPerk.insertMany(killperks)
    console.log('Killer Perks seeded');

    await Killer.deleteMany();
    await Killer.insertMany(killers)
    console.log('Killers seeded');

    await KillerAddOn.deleteMany();
    await KillerAddOn.insertMany(poweraddons)
    console.log('Killer add-ons seeded');

    await KillerBuild.deleteMany();
    const killBuilds = KillerBuild.insertMany(killerbuilds)
    console.log('Killer Builds seeded');

    await Survivor.deleteMany();
    await Survivor.insertMany(survivors)
    console.log('Survivors seeded');

    await SurvivorBuild.deleteMany();
    const survBuilds = await SurvivorBuild.insertMany(survivorbuilds)
    console.log('Survivor Builds seeded');

    await SurvPerk.deleteMany();
    await SurvPerk.insertMany(survperks)
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