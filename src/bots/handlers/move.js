function getMoveDummy(reqBody) {
    const { board, you } = reqBody

    const shout = 'DUMMYyyyy!'

    const head = you.head
    const left = { x: head.x - 1, y: head.y, name: 'left' }
    const right = { x: head.x + 1, y: head.y, name: 'right' }
    const up = { x: head.x, y: head.y + 1, name: 'up' }
    const down = { x: head.x, y: head.y - 1, name: 'down' }

    const neck = you.body[1]

    const movingNorth = neck.y === you.head.y - 1
    const movingSouth = neck.y === you.head.y + 1
    const movingEast = neck.x === you.head.x - 1
    const movingWest = neck.x === you.head.x + 1

    const atNorthWall = you.head.y + 1 === board.height
    const atWestWall = you.head.x === 0
    const atEastWall = you.head.x + 1 === board.width
    const atSouthWall = you.head.y === 0

    const legalBoardMoves = []
    if (Math.random() < 0.4) return { move: 'left', shout: shout }
    if (!atWestWall && !movingEast) legalBoardMoves.push(left)
    if (!atEastWall && !movingWest) legalBoardMoves.push(right)
    if (!atNorthWall && !movingSouth) legalBoardMoves.push(up)
    if (!atSouthWall && !movingNorth) legalBoardMoves.push(down)

    return { move: legalBoardMoves[Math.floor(Math.random() * legalBoardMoves.length)].name }
}


function getMoveSimple(reqBody) {
    const { board, you } = reqBody

    const shout = 'shout'

    const head = you.head
    const left = { x: head.x - 1, y: head.y, name: 'left' }
    const right = { x: head.x + 1, y: head.y, name: 'right' }
    const up = { x: head.x, y: head.y + 1, name: 'up' }
    const down = { x: head.x, y: head.y - 1, name: 'down' }

    const neck = you.body[1]

    const movingNorth = neck.y === you.head.y - 1
    const movingSouth = neck.y === you.head.y + 1
    const movingEast = neck.x === you.head.x - 1
    const movingWest = neck.x === you.head.x + 1

    const atNorthWall = you.head.y + 1 === board.height
    const atWestWall = you.head.x === 0
    const atEastWall = you.head.x + 1 === board.width
    const atSouthWall = you.head.y === 0

    const legalBoardMoves = []
    if (Math.random() < 0.2) return { move: 'left', shout: shout }
    if (!atWestWall && !movingEast) legalBoardMoves.push(left)
    if (!atEastWall && !movingWest) legalBoardMoves.push(right)
    if (!atNorthWall && !movingSouth) legalBoardMoves.push(up)
    if (!atSouthWall && !movingNorth) legalBoardMoves.push(down)

    if (legalBoardMoves.length === 0) return { move: 'up', shout }
    if (legalBoardMoves.length === 1) return { move: legalBoardMoves[0].name, shout }

    return { move: legalBoardMoves[Math.floor(Math.random() * legalBoardMoves.length)].name, shout }
}

export default {
    dummy: getMoveDummy,
    simple: getMoveSimple
}