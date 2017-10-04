// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("59d4c0d9a53baffa3d875f4f")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("59d259c11ef8351df6864d40")
  }, {
    $inc: {
      age: 1
    },
    $set: {
      name: "Sheridan"
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //db.close();
});
