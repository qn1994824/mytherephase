const { MongoClient } = require('mongodb');
const { DBurl, DBname } = require('../config.json')

async function conn() {
    //连接mongoDB
    // MongoClient.connect(DBurl, async function (err, client) {
    //     if (err) throw err;
    //     // 连接数据库，无则自动创建
    //     let db = client.db(DBname);
    //     // console.log(db)
    //     let col = db.collection('user');
    //     let result = await col.find().toArray()
    //     console.log(result);
    //     db.close();
    // });
    let result;
    try {
        let client = await MongoClient.connect(DBurl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        let db = client.db(DBname);
        result = { client, db };
    } catch (err) {
        result = err
    }
    return result;
}


async function find(colName, query = {}) {
    let { db, client } = await conn();
    let col = db.collection(colName);
    let result = await col.find(query).toArray();
    client.close();
    // console.log(result)
    return result;
}
async function create(colName, data) {
    let { db, client } = await conn();
    let col = db.collection(colName);
    let result = await col.insertMany(data);
    client.close();
    return result;
}
module.exports = {
    find,
    create
} 