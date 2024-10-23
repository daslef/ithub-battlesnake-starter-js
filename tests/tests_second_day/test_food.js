const tap = require('tap')

const { getMove } = require('../../src/handlers/move.js')

tap.test('eat food if hungry', (t) => {
    const you = {
        head: { x: 5, y: 5 },
        body: [
            { x: 5, y: 5 },
            { x: 5, y: 6 },
            { x: 5, y: 7 }
        ],
        health: 30
    }

    const game = {
        board: {
            height: 11,
            width: 11,
            snakes: [
                {
                    id: 'id',
                    name: 'us',
                    health: 30,
                    length: 3,
                    head: you.head,
                    body: you.body,
                    latency: 0,
                    shout: '',
                    squad: ''
                }
            ],
            food: [{ x: 4, y: 5 }],
            hazards: []
        },
        you: you
    }

    const result = getMove(game)
    const note = 'eat the food to the left'
    t.equal(result.move, 'left', note)
    t.end()
})
