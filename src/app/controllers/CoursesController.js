const Course = require('../modes/Course')
const { mongooseToObject } = require('../../until/mongoose')
 

class CourseController {

    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug : req.params.slug }, function(err, course) {
            if(err) {
                next();
            }
            else {
                res.render('courses/show', {course: mongooseToObject(course)});

            }
        })
            // .then(course => {
            //     res.render('courses/show', {course: mongooseToObject(course)});
            // })

            // .catch(next);
    }


    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

     // [POST] /courses/POST
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVylx9BpPUNEj_xvlTbxxcXGIgGw`
        const course = new Course(formData)

        course.save()
            .then(() => res.redirect('/me/store/courses'))

            .catch(err => {

            });
    }

    // [GET] /courses/edit
    edit(req, res, next) {

        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))

            .catch(next);
        
    }

     // [PUT] /courses/ID
    updata(req, res, next) {
        // Course.updateOne({_id: req.params.id}, req.body)
        //     .then(() => res.redirect('/me/store/courses'))

        //     .catch(next);

        Course.findByIdAndUpdate(req.params.id, req.body)
            .then(() => res.redirect('/me/store/courses'))

            .catch(next);
    }

      // [DELETE] /courses/ID
    destroy(req, res, next) {
        Course.delete({_id: req.params.id})
            .then(() => res.redirect('back'))

            .catch(next);
    }

      // [DELETE] /courses/ID/force
    
    forceDestroy(req, res, next) {
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))

            .catch(next);
    }


    // [PATCH] /courses/ID/restore
    restore(req, res, next) {
        Course.restore({_id: req.params.id})
            .then(() => res.redirect('back'))

            .catch(next);
        // res.send('adasd')
    }

    // [POST] /courses/hendle-form-actions
    hendleFormActions(req, res, next) {
        switch(req.body.action) {
            case 'delete' :
                Course.delete({_id: {$in: req.body.courseIds} })
                    .then(() => res.redirect('back'))

                    .catch(next);
                break;
            default:
                res.json({message: 'Action is invalid!'});
        }
    }



   

}

module.exports = new CourseController;
