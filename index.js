import express from 'express'

import {req_melon} from './src/crawler'

import { req_melon } from './src/crawler';


var server = express()

server.listen(3000, () => {

    console.log('server asdasdfstart ...')

    console.log('server start ...')

    req_melon()
})