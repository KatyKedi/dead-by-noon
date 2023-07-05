const db = require('../config/connection.js')
const { Item, ItemAddOn, Killer, KillerAddOn, KillerBuild, KillerPerk, Survivor, SurvivorBuild, SurvivorPerk, User } = require('../models');
const { items, itemaddons, survivors, survivorperks, killers, killerperks, powers, poweraddons } = require('./helpers.js')

db.once('open', async () => {
    try {
        await KillerPerk.deleteMany();
        const killerPerkArray = await KillerPerk.insertMany(killerperks)
        console.log('Killer Perks seeded');

        await SurvivorPerk.deleteMany();
        const survivorPerkArray = await SurvivorPerk.insertMany(survivorperks)
        console.log('Survivor Perks seeded');

        await Item.deleteMany();
        const itemArray = await Item.insertMany(items)
        console.log('Items seeded');

        const itemaddonsmap = await Promise.all(itemaddons.map(async addon => {
            const item = await Item.findOne({ title: addon.type })
            return { ...addon, type: item._id }
        }))

        await ItemAddOn.deleteMany();
        const itemAddOnArray = await ItemAddOn.insertMany(itemaddonsmap)
        console.log('Item add-ons seeded');

        const killersmap = killers.map(killer => {
            const power = powers.find(power => killer.name.toLowerCase().includes(power.killer.toLowerCase()))
            return { ...killer, power: power.power }
        })

        await Killer.deleteMany();
        const killerArray = await Killer.insertMany(killersmap)
        console.log('Killers seeded');

        const addonsmap = await Promise.all(poweraddons.map(async addon => {
            const killer = await Killer.findOne({ power: addon.power })
            delete addon.power
            return { ...addon, killer: killer._id }
        }))

        await KillerAddOn.deleteMany();
        const killerAddOnArray = await KillerAddOn.insertMany(addonsmap)
        console.log('Killer add-ons seeded');

        await Survivor.deleteMany();
        await Survivor.insertMany(survivors)
        console.log('Survivors seeded');

        const randomKillerAddOns = await KillerAddOn.find({ killer: killerArray[0]._id })

        const killerbuilds = [
            {
                name: 'Killer test',
                description: 'test for killer builds',
                killer: killerArray[0]._id,
                perks: [
                    killerPerkArray[0]._id,
                    killerPerkArray[1]._id,
                    killerPerkArray[2]._id,
                    killerPerkArray[3]._id,
                ],
                addOns: [
                    randomKillerAddOns[0]._id,
                    randomKillerAddOns[1]._id
                ]
            }
        ]

        const randomSurvivorAddOns = await ItemAddOn.find({ item: itemArray[0]._id })

        const survivorbuilds = [
            {
                name: 'Survivor test',
                description: 'test for survivor builds',
                item: itemArray[0]._id,
                perks: [
                    survivorPerkArray[0]._id,
                    survivorPerkArray[1]._id,
                    survivorPerkArray[2]._id,
                    survivorPerkArray[3]._id,
                ],
                addOns: [
                    randomSurvivorAddOns[0]._id,
                    randomSurvivorAddOns[1]._id
                ]
            }
        ]

        await SurvivorBuild.deleteMany();
        const survivorBuildArray = await SurvivorBuild.insertMany(survivorbuilds)
        console.log('Survivor builds seeded')

        await KillerBuild.deleteMany();
        const killerBuildArray = await KillerBuild.insertMany(killerbuilds)
        console.log('Killer builds seeded')

        await User.deleteMany();
        await User.insertMany([
            {
                email: 'user1@email.com',
                password: 'password',
                survBuilds: [
                    survivorBuildArray[0]._id
                ],
                killBuilds: [
                    killerBuildArray[0]._id
                ]
            }
        ])
        console.log('Users seeded')

        console.log('All seeded');

    } catch (err) {
        console.log(err)
    }
    process.exit();
});