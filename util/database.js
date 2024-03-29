const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

let _db
const mongoConnect = (callBack) => {
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      console.log('Connected!')
      _db = client.db()
      callBack(client)
    })
    .catch((err) => {
      console.log('__error_connecting_mongo_client__', err)
    })
}

const getDb = () => {
  if (_db) {
    return _db
  } else {
    throw '__error_no_database_found__'
  }
}

module.exports = { getDb, mongoConnect }
