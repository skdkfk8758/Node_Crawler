import express from 'express'

import { PORT } from './config';
import router from './src/router';
import { call_youtube } from './src/lib/youtube_api';

var app = require('express')();
app.use(router)
app.use(express.static('public'));


app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(PORT, async () => {
    console.log('server start ...')
})

var cron = require('node-cron')

cron.schedule('50 * * * * *', () => {  
    console.log('running a task every minute');
});