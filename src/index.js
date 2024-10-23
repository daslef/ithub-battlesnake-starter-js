import loadConfig from "./server/config.js";
import bootstrap from './server/index.js'

const { host, port } = loadConfig()
const app = bootstrap()

app.listen(port, host, () => {
    console.log('Express running...')
})