import express from 'express'
import MelonController from '../controller/melon_controller';
var path=require('path')
var moment=require('moment')
const router=express.Router();

router.route('/').get((req,res)=>{
    MelonController.fetch_melon_list()
    .then((result)=>{
        res.render('index',{
            result: result,
            moment : moment
        })
    }).catch(e=>console.log(e))

})

export default router;