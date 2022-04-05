const newsRouter = require('./news');
const siteRouter = require('./site');
const AboutRouter = require('./about');
const CoursesRouter = require('./courses');
const MeRouter = require('./me');

function route(app) {

    app.use('/news', newsRouter);
    app.use('/about-us', AboutRouter);
    app.use('/courses', CoursesRouter);
    app.use('/me', MeRouter);
    

    app.use('/', siteRouter);

}

module.exports = route;