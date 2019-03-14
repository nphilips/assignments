const express = require('express')
const uuid = require('uuid/v4')
const app = express()

// Fake Database   A good char is above B-Tier in Dominion
let heros = [
    {
        name: 'Raider',
        class: 'Vanguard',
        faction: 'Vikings',
        goodChar: true,
        _id: uuid()
    },
    {
        name: 'Berserker',
        class: 'Assassins',
        faction: 'Vikings',
        goodChar: true,
        _id: uuid()
    },
    {
        name: 'Shaman',
        class: 'Assassins',
        faction: 'Vikings',
        goodChar: true,
        _id: uuid()
    },
    {
        name: 'Warlord',
        class: 'Heavy',
        faction: 'Vikings',
        goodChar: false,
        _id: uuid()
    },
    {
        name: 'Highlander',
        class: 'Hybrid',
        faction: 'Vikings',
        goodChar: false,
        _id: uuid()
    },
    {
        name: 'Valkyrie',
        class: 'Assassins',
        faction: 'Vikings',
        goodChar: false,
        _id: uuid()
    },
    {
        name: 'Warden',
        class: 'Vanguard',
        faction: 'Knights',
        goodChar: false,
        _id: uuid()
    },
    {
        name: 'Gladiator',
        class: 'Assassin',
        faction: 'Knights',
        goodChar: false,
        _id: uuid()
    },
    {
        name: 'Peacekeeper',
        class: 'Assassin',
        faction: 'Knights',
        goodChar: false,
        _id: uuid()
    },
    {
        name: 'Conqueror',
        class: 'Heavy',
        faction: 'Knights',
        goodChar: false,
        _id: uuid()
    },
    {
        name: 'Black Prior',
        class: 'Heavy',
        faction: 'Knights',
        goodChar: true,
        _id: uuid()
    },
    {
        name: 'Lawbringer',
        class: 'Hybrid',
        faction: 'Knights',
        goodChar: false,
        _id: uuid()
    },
    {
        name: 'Centurion',
        class: 'Hybrid',
        faction: 'Knights',
        goodChar: false,
        _id: uuid()
    },
    {
        name: 'Kensei',
        class: 'Vanguard',
        faction: 'Samurai',
        goodChar: false,
        _id: uuid()
    },
    {
        name: 'Orochi',
        class: 'Assassin',
        faction: 'Samurai',
        goodChar: false,
        _id: uuid()
    },
    {
        name: 'Shinobi',
        class: 'Assassin',
        faction: 'Samurai',
        goodChar: true,
        _id: uuid()
    },
    {
        name: 'Shugoki',
        class: 'Heavy',
        faction: 'Samurai',
        goodChar: false,
        _id: uuid()
    },
    {
        name: 'Aramusha',
        class: 'Hybrid',
        faction: 'Samurai',
        goodChar: false,
        _id: uuid()
    },
    {
        name: 'Nobushi',
        class: 'Hybrid',
        faction: 'Samurai',
        goodChar: true,
        _id: uuid()
    },
    {
        name: 'Tiandi',
        class: 'Vanguard',
        faction: 'Wu Lin',
        goodChar: false,
        _id: uuid()
    },
    {
        name: 'Nuxia',
        class: 'Assassin',
        faction: 'Wu Lin',
        goodChar: false,
        _id: uuid()
    },
    {
        name: 'Jiang Jun',
        class: 'Heavy',
        faction: 'Wu Lin',
        goodChar: true,
        _id: uuid()
    },
    {
        name: 'Shaolin',
        class: 'Hybrid',
        faction: 'Wu Lin',
        goodChar: true,
        _id: uuid()
    },
]

app.get('/', (req, res) => {
    res.send(heros)
})

app.listen(7000, () => {
    console.log("The server is running on port 7000");
})