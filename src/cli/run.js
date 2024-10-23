import os from 'os'
import path from 'path'
import { spawn } from 'child_process'

function getPath(osType) {
    switch (osType) {
        case 'Darwin':
            return 'osx_arm'
        case 'Linux':
            return 'linux'
        case 'Windows_NT':
            return 'windows'
    }
}

function getExecutableFormat(osType) {
    return osType === 'Windows_NT' ? '.exe' : ''
}

export default function run(browser) {
    const url = `http://${process.env?.HOST || "localhost"}:${process.env?.PORT || 4000}`
    const osType = os.type()
    const cliPath = path.join(import.meta.dirname, getPath(osType), `battlesnake${getExecutableFormat(osType)}`)

    const cliParams = ['play', '--name', 'Snake', '--url', url]

    if (browser) {
        cliParams.push('--browser')
    }

    return () => spawn(cliPath, cliParams);
}
