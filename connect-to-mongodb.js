const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const url = 'mongodb://hojjat:Ho6230234@localhost/?retryWrites=true&w=majority';

function createCollections() {
    MongoClient.connect(url, (err, db) => {
        if(err) throw err;
        const todos = db.db('todos');
        todos.createCollection("customers", (err, res) => {
            if(err) throw err;
            console.log('collections created!');
            db.close();
        });
    })
}

function insertObjectToCustomers(obj) {
    MongoClient.connect(url, (err, db) => {
        if(err) throw err;
        const todos = db.db('todos');
        todos.collection('customers').insertOne(obj, (err, res) => {
            if(err) throw err;
            console.log('document inserted!');
            db.close();
        });
    });
}

module.exports.insertToCustomersTest = () => {
    insertObjectToCustomers({
        name: 'Ali',
        lastName: 'نهاوندی'
    });
}