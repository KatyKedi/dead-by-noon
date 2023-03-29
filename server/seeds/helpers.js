import Mongoose from "mongoose"
import items from "items.json"
import itemaddons from "itemaddons.json"
import killaddons from "poweraddons.json"

import perks from "perks.json"
import characters from "characters.json"
import powers from "powers.json"

const killperks = perks.filter(perk => (perk.type.includes('Killer')) && perk)
console.log(killperks)
const survperks = perks.filter(perk => (perk.type.includes('Survivor')) && perk)

const killers = characters.filter(character => (character.type === 'killer') && character)
const survivors = characters.filter(character => (character.type === 'survivor') && character)

items = items.map( item => {
    const mongoId = new Mongoose.Types.ObjectId
    item = { ...item, _id: mongoId }

    itemaddons = itemaddons.map( addon => {
        if(addon.type === item.title ){
            addon.type = mongoId
        }
        return addon
    })
    return item
})

survperks = survperks.map(survperk => {

    const mongoId = new Mongoose.Types.ObjectId
    survperk = { ...survperk, _id: mongoId }

    survivors = survivors.map(survivor => {

        survivor.perks = survivor.perks.map(perk => {

            if(perk === survperk.name) {
                perk = mongoId
            }
            return perk
        })
        return survivor
    })
    return survperk
})


killperks = killperks.map(killperk => {

    const mongoIdPerk = new Mongoose.Types.ObjectId
    killperk = { ...killperk, _id: mongoIdPerk }

    killers = killers.map(killer => {
        const mongoIdKiller = new Mongoose.Types.ObjectId
        killer = { ...killer, _id: mongoIdKiller }

        killer.perks = killer.perks.map(perk => {
            if(perk === killperk.name) {
                perk = mongoId
            }
            return perk
        })

        powers.forEach(power => {
            if (killer.name === power.killer) {
                killer.power = power.name
            }
        })

        return killer
    })
    return killperk
})

module.exports = { items, itemaddons, survivors, survperks, killers, killperks, killaddons }