import db from './connection';
import { Item, ItemAddOn, Killer, KillerAddOn, KillerBuild, KillerPerk, Survivor, SurvivorBuild, SurvivorPerk } from '../models';
import { items, itemaddons, survivors, survivorperks, killers, killerperks, powers, poweraddons } from './helpers.js'

db.once('open', async () => {

    await KillerPerk.deleteMany();
    await KillerPerk.insertMany(killerperks)
    console.log('Killer Perks seeded');

    await SurvivorPerk.deleteMany();
    await SurvivorPerk.insertMany(survivorperks)
    console.log('Survivor Perks seeded');

    await Item.deleteMany();
    await Item.insertMany(items)
    console.log('Items seeded');
    
    await ItemAddOn.deleteMany();
    await ItemAddOn.insertMany(itemaddons)
    console.log('Item add-ons seeded');

    await Killer.deleteMany();
    await Killer.insertMany(killers)
    console.log('Killers seeded');

    await KillerAddOn.deleteMany();
    await KillerAddOn.insertMany(poweraddons)
    console.log('Killer add-ons seeded');

    await Survivor.deleteMany();
    await Survivor.insertMany(survivors)
    console.log('Survivors seeded');

    console.log('All seeded');

    process.exit();
});