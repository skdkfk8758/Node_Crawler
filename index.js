import express from 'express'

import {req_melon} from './src/crawler'
import { PORT } from './config';
import router from './src/router';

var app = require('express')();
app.use(router)

app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(PORT, () => {
    console.log('server start ...')
})