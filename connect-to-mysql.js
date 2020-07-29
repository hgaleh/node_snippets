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
	connection.query(	q, v, function (err, result) {
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
	`, [nam]);
}

query(`insert into users (username)
		values ('ali mohammad')`
);

query(`
	select * from users
`);

queryWithValue('insert into customers(name, lastname) values (?, ?)', [[['molla', 'kazom'], ['ali', 'gholi']]]);

query(`
	CREATE TABLE customers (
		name varchar(30),
		lastname varchar(30)
	);
`);

query(`
		SELECT *
		FROM customers
		ORDER BY lastname
		ASC
`);

queryWithValue(
	`
		DELETE FROM customers
		WHERE name = ?
	`,
	['ali']
);

queryWithValue(
	`UPDATE customers
	SET name = ?
	WHERE name = ?`,
	[
		['hojjat'],
		['molla']
	]
);

query(`
		SELECT *
		FROM customers
		ORDER BY lastname
`);

query(`insert into customers (name, lastname)
		VALUES ('hojjat', 'alimi')`);
query(`insert into customers (name, lastname)
		VALUES ('ali', 'rahimi')`);
query(`insert into customers (name, lastname)
		VALUES ('jafar', 'mesdaghi')`);
query(`
	SELECT *
	FROM customers as c inner join users as u
	ON u.username != c.name
`);