const newsRouter = require('./news');
const siteRouter = require('./site');
const AboutRouter = require('./about');

function route(app) {

    app.use('/news', newsRouter);
    app.use('/about-us', AboutRouter);

    app.use('/', siteRouter);

}

module.exports = route;