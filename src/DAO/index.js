
import {DB_CONFIG} from '../../config/';
import { resolve } from 'path';

var mysql = require('mysql');

const conn =mysql.createConnection(DB_CONFIG);

export const query = async(sql="",param={})=>{
    
    return new Promise((resolve,reject)=>{
        conn.query(sql,param,(error,rows,field)=>{
            if(error){reject(error)}

import { DB_CONFIG } from '../../config'

var mysql = require('mysql');

const conn = mysql.createConnection(DB_CONFIG);

export const query = async (sql = "", param = {}) => {
    // console.log(sql)
    // console.log(param)
    return new Promise((resolve, reject) => {
        conn.query(sql, param, (error, rows, fields) => {
            if(error) { reject(error) }
            resolve(rows)
        })
    })
}

const DAO={
  const DAO = {
    query,
    conn
}

export default DAO