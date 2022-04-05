const Course = require('../modes/Course')
const { mutipleMongooseToObject } = require('../../until/mongoose')
 

class SiteController {

    // [GET] /
    index(req, res, next) {
        // res.render('home');

        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }

    // [GET] /search

    search(req, res) {
        res.render('search');
    }

}

module.exports = new SiteController;