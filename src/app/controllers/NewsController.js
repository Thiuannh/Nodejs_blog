
class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('news');
    }


    // [GET] /new /:slug
    show(req, res) {
        res.send('HÔM NAY THIẾU EM!!!');
    }
}

module.exports = new NewsController;
