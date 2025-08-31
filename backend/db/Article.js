const sqlite3 = require('sqlite3').verbose()
const dbName = 'later.sqlite'
const db = new sqlite3.Database(dbName)

const sql = `
	CREATE TABLE IF NOT EXISTS articles (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		title TEXT NOT NULL,
		content TEXT NOT NULL
	)
	`
db.run(sql)


class Article {
	static all(cb) {
		db.get('SELECT * FROM articles', cb)
	}

	static find(id, cb) {
		db.get('SELECT * FROM articles WHERE id = ?', id, cb)
	}

	static create(data, cb) {
		const sql = 'INSERT INTO articles(title, content) VALUES (?, ?)'
		db.run(sql, data.title, data.content, cb)
	}

	static delete(id, cb) {
		if (!id) return cb(new Error('Please provide an id'))
		db.run('DELETE FROM articles WHERE id =?', id, cb)
	}
}

module.exports = db;
module.exports.Article = Article;