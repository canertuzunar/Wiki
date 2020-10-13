import {merge} from'lodash'
const env = process.env.NODE_ENV || 'development'

const baseConfig = {
    isDev: env === 'development', 
    isTest: env === 'testing',
    isProd: env === 'production',
    PORT: 3001,
}

let envConfig = {}

switch (env) {
    case 'dev':
        case 'development':
            envConfig = require('./dev').config
            break;
    case 'test':
        case 'testing':
            envConfig = require('./test').config
            break
    case 'prod':
        case 'production':
            envConfig = require('./production').config
            break
    default:
        envConfig = require('./dev').config
        break;
}

export default merge(baseConfig, envConfig)