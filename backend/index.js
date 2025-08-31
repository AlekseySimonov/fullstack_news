const express = require('express');
const app = express();
const articles = [{ title: 'Example' }, { title: 'Example2' }];
const bodyParser = require('body-parser');
const { Article } = require('./db/Article');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/articles', (req, res, next) => {
	Article.all((err, articles) => {
		if (err) return next(err)
		res.send(articles);
	})
});

app.post('/articles', (req, res, next) => {
	const data = { title: req.body.title, content: req.body.content };
	Article.create(data, (err) => {
		if (err) return next(err);
		res.status(201).send(data);
	});
});

app.get('/articles/:id', (req, res, next) => {
	const id = req.params.id;
	Article.find(id, (err, article) => {
		if (err) return next(err);
		if (!article) return res.status(404).send({ error: 'Article not found' });
		res.send(article);
	});
});

app.delete('/articles/:id', (req, res, next) => {
	const id = req.params.id;
	Article.delete(id, (err) => {
		if (err) return next(err)
		res.send({ message: 'Deleted' });
	});
});

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).send({ error: err.message });
});

app.listen(process.env.PORT || 3000);

module.exports = app;