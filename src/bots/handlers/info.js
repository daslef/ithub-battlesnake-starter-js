function getInfoDummy() {
    return {
        apiversion: "1",
        author: "Battlesnake",
        color: "#FF715B",
        head: "default",
        tail: "default",
    };
}

function getInfoSimple() {
    return {
        apiversion: "1",
        author: "Battlesnake",
        color: "#BCED09",
        head: "default",
        tail: "default",
    };
}

export default {
    dummy: getInfoDummy,
    simple: getInfoSimple
}