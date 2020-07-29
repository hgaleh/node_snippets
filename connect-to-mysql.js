const mysql = require('mysql');

const connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: 'Ho6230234',
 database: 'hojjat'
});

function query(q) {
	connection.query(	q, function (err, result) {
								if (err) console.table(err);
								console.table( result);
						}
	);	
}

function queryWithValue(q, v) {
	connection.query(	q, [v], function (err, result) {
								if (err) console.table(err);
								console.table( result);
						}
	);
}

function selectCustomerByName(nam) {
	queryWithValue(`
		SELECT *
		FROM customers
		WHERE name = ?
	`, nam);
}

query(`insert into users (username)
		values ('ali mohammad')`
);

query(`
	select * from users
`);

queryWithValue('insert into customers(name, lastname) values (?, ?)', [['molla', 'kazom'], ['ali', 'gholi']]);

query(`
	CREATE TABLE customers (
		name varchar(30),
		lastname varchar(30)
	);
`);