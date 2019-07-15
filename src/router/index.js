import express from 'express'
import MelonController from '../controller/melon_controller';

const router = express.Router()

var path = require('path')
var moment = require("moment")

router.route('/aaa')
    .get(async (req, res) => { 
        const melon_list = await MelonController.fetch_melon_chart()
        res.render('index_k', {
            title: "멜론차트",
            melon_list: melon_list,
            moment: moment,
        })
    })

export default router