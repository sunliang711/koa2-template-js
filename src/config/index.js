const dotenv = require('dotenv')
dotenv.config({ path: '.env' })

// const NODE_ENV = process.env.NODE_ENV || 'dev'

const config = {
    server: {
        port: process.env.SERVER_PORT
    },
    db: {

    },
    jwt: {}
}

module.exports = config
