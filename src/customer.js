require('dotenv').config()
var db = require('../config/database')

let GetCustomers = (callback) => {
    const query = "SELECT * FROM customers"

    db.query(query, (err, result) => {
        if (err) 
            callback(err, null)
        else
            callback(null, result)
    })
}

let PivotCustomers = (callback) => {
    const query = `select CONCAT(first_name, " ", last_name) as full_name,email,
        sum(IF(item = 'Barang1', quantity, 0)) as Barang1,
        sum(IF(item = 'Barang2', quantity, 0)) as Barang2,
        sum(IF(item = 'Barang3', quantity, 0)) as Barang3,
        sum(IF(item = 'Barang4', quantity, 0)) as Barang4,
        sum(IF(item = 'Barang5', quantity, 0)) as Barang5,
        sum(IF(item = 'Barang6', quantity, 0)) as Barang6,
        sum(IF(item = 'Barang7', quantity, 0)) as Barang7,
        sum(IF(item = 'Barang8', quantity, 0)) as Barang8,
        sum(IF(item = 'Barang9', quantity, 0)) as Barang9,
        sum(IF(item = 'Barang10', quantity, 0)) as Barang10
    from customers GROUP by first_name;`;

    db.query(query, (err, result) => {
        if (err)
            callback(err, null)
        else 
            callback(null, result)
    })

}

module.exports = {
    GetCustomers,
    PivotCustomers
}