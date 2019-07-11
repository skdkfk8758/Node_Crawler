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

const DAO = {
    query,
    conn
}

export default DAO