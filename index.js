import express from 'express'
import {req_melon} from './src/crawler'

var server = express()

server.listen(3000, () => {
    console.log('server asdasdfstart ...')
    req_melon()
})