import express from 'express'
import router from './src_bj/router';
import MelonController from './src_bj/controller/melon_controller';

//import { req_melon } from './src/crawler';


var app = require('express')();
app.use(router) 

app.set('views',__dirname+'/client_bj/views')
app.set('view engine', 'ejs')
app.engine('html',require('ejs').renderFile)
//var server = express()
 
app.listen(3001, () => {
    MelonController.fetch_melon_list()
    console.log('server asdasdfstart ...')

    console.log('server start ...')

    //req_melon()
})