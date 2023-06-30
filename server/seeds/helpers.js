const { Item } = require('../models')

const perks = require("./perks.json")
const characters = require("./character.json")
const items = require("./items.json")
let itemaddons = require("./itemaddons.json")
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

characters.forEach(character => {
    if (character.type === 'killer') {
        delete character.type
        killers.push(character)
    } else {
        delete character.type
        survivors.push(character)
    }
})

module.exports = { items, itemaddons, survivors, survivorperks, killers, killerperks, powers, poweraddons }