const perks = require("./perks.json")
const characters = require("./character.json")
const items= require("./items.json")
const itemaddons = require("./itemaddons.json")
const powers = require("./powers.json")
const poweraddons = require("./poweraddons.json")

let killerperks = []
let survivorperks = []

perks.forEach(perk => {
    perk.type.map(phrase => {
        if (phrase.includes('Killer')) {
            delete perk.type
            killerperks.push(perk)
        } else {
            delete perk.type
            survivorperks.push(perk)
        } 
    })
})

let killers = []
let survivors = []

characters.forEach(character => (character.type === 'killer') ? killers.push(character) : survivors.push(character))


module.exports = { items, itemaddons, survivors, survivorperks, killers, killerperks, powers, poweraddons }