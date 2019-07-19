import express from 'express'
import MelonController from '../controller/melon_controller';
import { scrap_melon } from '../crawler/melon_crawler';

const router = express.Router()

var path = require('path')
var moment = require("moment")

router.route('/crawl/melon')
    .get((req, res) => {
        scrap_melon(res)
    })

router.route('/node_crawler')
    .get(async (req, res) => { 
        const melon_list = await MelonController.fetch_melon_chart()
        res.render('index', {
            title: "멜론차트",
            melon_list: melon_list,
            moment: moment,
        })
    })

export default router