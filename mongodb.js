// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne({ _id: new ObjectID('5d59addae2150d2ef8241bb1') }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    // });

    db.collection('users').find({ age: '31' }).toArray((error, users) => {
        if (error) {
            console.log('Unable to retrieve users');
        }

        console.log(users);
    });

    db.collection('users').find({ age: '31' }).count((error, count) => {
        if (error) {
            console.log('Unable to retrieve users');
        }

        console.log(count);
    });
});
