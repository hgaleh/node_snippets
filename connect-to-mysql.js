const mysql = require('mysql');
const fs = require('fs');

const connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: 'Ho6230234',
 database: 'hojjat'
});

function query(q) {
	connection.query(q, function (err, result) {
								if (err) console.table(err);
								console.table(result);
						}
	);
}

function queryList(q, callBack) {
	connection.query(q, function (err, result) {
								if (err) throw err;
								return callBack(result);
						}
	);
}

function queryWithValue(q, v) {
	connection.query(	q, v, function (err, result) {
								if (err) console.table(err);
								console.table(result);
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

function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}

Date.prototype.toMysqlFormat = function() {
    return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getUTCHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
};

function queries() {

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

	query(`
	ALTER TABLE users
	MODIFY createdate DATETIME
	`);

	query(`
	CREATE TABLE testtable (
		id INT AUTO_INCREMENT PRIMARY KEY,
		testtiny TINYINT(1),
		testtiny2 TINYINT(10)
	)
	`)


	query('DROP TABLE testtable')

	queryWithValue(`
		UPDATE users
		SET createdate = ?
		WHERE id = 1
	`, [new Date().toMysqlFormat()]
	)

	queryList('select createdate from users where id = 1', res => console.log(res[0].createdate.toString()));

	query(`
	ALTER TABLE users
	ADD image BLOB(1000000)
	`)

}

function addImageForUser() {
	fs.readFile('./0.jpg', (err, data) => {
		queryWithValue(`
			UPDATE users
			SET image = ?
			WHERE id = 1
		`, [data]);
	})
}

function getImageFromDatabaseAndSave() {
	queryList(`
		SELECT image
		FROM users
		WHERE id = 1
	`, (res) => {
		fs.writeFile('./hojjat-image.jpg',
		res[0].image, 
		(res) => {
			if(!res)
				console.log('image saved!');
		}
		);
	});
}

function savePersianText() {
	queryWithValue(`
		UPDATE customers
		SET name = ?
		WHERE name = 'hojjat'
	`, ['حجت']);
}

module.exports.savePersian = savePersianText;