
class AboutController {

    // [GET] /About-us
    index(req, res) {
        res.render('about-us');
    }

}

module.exports = new AboutController;
