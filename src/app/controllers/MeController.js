const Course = require('../modes/Course')
const { mongooseToObject, mutipleMongooseToObject } = require('../../until/mongoose')
 

class MeController {

    // [GET] /me/store/courses

    storedCourses(req, res, next) {

        Course.countDocumentsDeleted()
            .then((deleteCount) => {
                Course.find()
                    .then(courses => res.render('./me/stored-courses', {
                        deleteCount,
                        courses: mutipleMongooseToObject(courses)
                        }))
                    .catch(next);
                
            })

            .catch(next);


        // Course.find()
        //     .then(courses => res.render('./me/stored-courses', {
        //         courses: mutipleMongooseToObject(courses)
        //     }))
            
        //     .catch(next);
    }

    // [GET] /me/strash/courses

    strashCourses(req, res, next) {

        Course.findDeleted()
            .then(courses => res.render('./me/trash-courses', {
                courses: mutipleMongooseToObject(courses)
            }))
            
            .catch(next);
    }
    


}

module.exports = new MeController;
