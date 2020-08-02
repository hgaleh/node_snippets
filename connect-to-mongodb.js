const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const url = 'mongodb://hojjat:Ho6230234@localhost/?retryWrites=true&w=majority';

module.exports.createCollection = (collectionName) => {
    MongoClient.connect(url, (err, db) => {
        if(err) throw err;
        const todos = db.db('todos');
        todos.createCollection(collectionName, (err, res) => {
            if(err) throw err;
            console.log(`${collectionName} created!`);
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

function showCustomerItem(criteria) {
    MongoClient.connect(url, (err, db) => {
        if(err) throw err;
        const todos = db.db('todos');
        todos.collection('customers').findOne(criteria, (err, res) => {
            if(err) throw err;
            console.table(res);
            db.close();
        });
    });
}

function showCustomerItems(criteria) {
    MongoClient.connect(url, (err, db) => {
        if(err) throw err;
        const todos = db.db('todos');
        todos.collection('customers').find(criteria).toArray((err, res) => {
            if(err) throw err;
            console.table(res);
            db.close();
        });
    });
}

module.exports.insertObjectToCustomers = (name, lastName) => {
    insertObjectToCustomers({
        name,
        lastName
    });
}

module.exports.showCustomerItem = showCustomerItem;
module.exports.showCustomerItems = showCustomerItems;
module.exports.showCustomerItemsByColumn = function showCustomerItemsByColumn(criteria, projection) {
    MongoClient.connect(url, (err, db) => {
        if(err) throw err;
        const todos = db.db('todos');
        todos.collection('customers').find(criteria, {projection: projection}).toArray((err, res) => {
            if(err) throw err;
            console.table(res);
            db.close();
        });
    });
}

module.exports.customers = (doIt) => {
    MongoClient.connect(url, (err, db) => {
        if(err) throw err;
        const todos = db.db('todos');
        doIt(todos.collection('customers'));
        db.close();
    });
}

module.exports.sort = () => {
    module.exports.customers(table => table.find()
    .sort({name: 1})
    .toArray((err, res) => {
        console.table(res);
    }))
}

module.exports.sortDec = () => {
    module.exports.customers(table => table.find()
    .sort({name: -1})
    .toArray((err, res) => {
        console.table(res);
    }))
}

module.exports.deleteOne = (criteria) => {
    module.exports.customers(table => {
        table.deleteOne(criteria, (err, res) => {
            if(err) throw err;
            console.log(`${res.deletedCount} doc deleted`);
        });
    });
}

module.exports.deleteMany = (criteria) => {
    module.exports.customers(table => {
        table.deleteMany(criteria, (err, res) => {
            if (err) throw err;
            console.log(`${res.result.n} documents deleted!`);
        })
    });
};

module.exports.dropCollection = (collectionName) => {
    MongoClient.connect(url, (err, db) => {
        if(err) throw err;
        const todos = db.db('todos');
        todos.collection(collectionName).drop((err, delOk) => {
            if(err) throw err;
            if (delOk) console.log(`dropped ${collectionName}!`);
            db.close();
        })
    });
}

module.exports.updateOne = (crieria, newValue) => {
    module.exports.customers(collection => {
        collection.updateOne(crieria, newValue, (err, res) => {
            if (err) throw err;
            console.log(`${res.modifiedCount} document updated!`);
        });
    });
}

module.exports.updateMany = (crieria, newValue) => {
    module.exports.customers(collection => {
        collection.updateMany(crieria, newValue, (err, res) => {
            if (err) throw err;
            console.log(`${res.modifiedCount} document updated!`);
        });
    });
}