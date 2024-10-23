const tap = require('tap')

const { getMove } = require('../../src/handlers/move.js')

tap.test('attack smaller snake, head to head', (t) => {
    const you = {
        head: { x: 5, y: 5 },
        body: [
            { x: 5, y: 5 },
            { x: 5, y: 6 },
            { x: 5, y: 7 },
            { x: 6, y: 7 },
            { x: 7, y: 7 }
        ],
        length: 5,
        health: 77
    }

    const opp = {
        head: { x: 5, y: 3 },
        body: [
            { x: 5, y: 3 },
            { x: 5, y: 2 },
            { x: 5, y: 1 },
            { x: 4, y: 1 }
        ],
        length: 4,
        health: 88
    }

    const game = {
        board: {
            height: 11,
            width: 11,
            snakes: [
                {
                    id: 'id',
                    name: 'us',
                    health: you.health,
                    length: you.length,
                    head: you.head,
                    body: you.body,
                    latency: 0,
                    shout: '',
                    squad: ''
                },
                {
                    id: 'id2',
                    name: 'them',
                    health: opp.health,
                    length: opp.length,
                    head: opp.head,
                    body: opp.body,
                    latency: 0,
                    shout: '',
                    squad: ''
                }
            ],
            food: [],
            hazards: []
        },
        you: you
    }

    const result = getMove(game)
    const note = 'attack the smaller snake'
    t.equal(result.move, 'down', note)
    t.end()
})