import express from 'express'
import {PORT} from "./config";

var server = express()

server.listen(PORT, () => {
    console.log('server start ...')
})