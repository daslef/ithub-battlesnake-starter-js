export default function loadConfig() {
    return {
        host: "0.0.0.0",
        port: process.env.PORT || 8000
    }
}