const db = require('../config/connection.js')
const { Item, ItemAddOn, Killer, KillerAddOn, KillerBuild, KillerPerk, Survivor, SurvivorBuild, SurvivorPerk } = require('../models');
const { items, itemaddons, survivors, survivorperks, killers, killerperks, powers, poweraddons } = require('./helpers.js')

db.once('open', async () => {
    try {
        await KillerPerk.deleteMany();
        await KillerPerk.insertMany(killerperks)
        console.log('Killer Perks seeded');

        await SurvivorPerk.deleteMany();
        await SurvivorPerk.insertMany(survivorperks)
        console.log('Survivor Perks seeded');

        await Item.deleteMany();
        await Item.insertMany(items)
        console.log('Items seeded');

        const itemaddonsmap = await Promise.all(itemaddons.map(async addon => {
            const item = await Item.findOne({ title: addon.type })
            return { ...addon, type: item._id }
        }))

        await ItemAddOn.deleteMany();
        await ItemAddOn.insertMany(itemaddonsmap)
        console.log('Item add-ons seeded');

        const killersmap = killers.map(killer => {
            const power = powers.find(power => killer.name.toLowerCase().includes(power.killer.toLowerCase()))
            return { ...killer, power: power.power }
        })

        await Killer.deleteMany();
        await Killer.insertMany(killersmap)
        console.log('Killers seeded');

        // await KillerAddOn.deleteMany();
        // await KillerAddOn.insertMany(poweraddons)
        // console.log('Killer add-ons seeded');

        // await Survivor.deleteMany();
        // await Survivor.insertMany(survivors)
        // console.log('Survivors seeded');

        // console.log('All seeded');

    } catch (err) {
        console.log(err)
    }
    process.exit();

});