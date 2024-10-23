export default function getMove(gameState) {
    /* 
    ** Вызывается каждый ход и должна возвращать одно
    ** из значений: "up", "down", "left" или "right"
    */

    const isMoveSafe = {
        up: true,
        down: true,
        left: true,
        right: true,
    };

    // Избегаем движения в обратном направлении

    const myHead = gameState.you.body[0];
    const myNeck = gameState.you.body[1];

    if (myNeck.x < myHead.x) {
        isMoveSafe.left = false;
    } else if (myNeck.x > myHead.x) {
        isMoveSafe.right = false;
    } else if (myNeck.y < myHead.y) {
        isMoveSafe.down = false;
    } else if (myNeck.y > myHead.y) {
        isMoveSafe.up = false;
    }

    // Улучшение 1 - Защити своего червячка от выхода за границы поля

    // boardWidth = gameState.board.width;
    // boardHeight = gameState.board.height;
    // TODO

    // Улучшение 2 - Защити своего червячка от столкновения со своим телом
    // myBody = gameState.you.body;
    // TODO

    // Улучшение 3 - Защити своего червячка от столкновения с телами соперников 
    // opponents = gameState.board.snakes;
    // TODO

    // Проверка, остались ли безопасные ходы (если нет, то куда угодно)

    const safeMoves = Object.keys(isMoveSafe).filter((key) => isMoveSafe[key]);
    if (safeMoves.length == 0) {
        return { move: "down" };
    }

    // Если безопасные ходы есть ход, из них выбирается рандомный

    const nextMove = safeMoves[Math.floor(Math.random() * safeMoves.length)];

    return { move: nextMove };
}
