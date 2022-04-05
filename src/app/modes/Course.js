const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator');

const mongooseDelete = require('mongoose-delete');


mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({

    name: {type: String, maxlength: 255},
    description: {type: String, maxlength: 600},
    image: {type: String, maxlength: 255},
    level: { type: String },
    slug: { type: String },
    videoId: {type: String },

    slug: { type: String, slug: 'name', unique: true }
    // createAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now }

},
{
    timestamps: true,
});


Course.plugin(mongooseDelete);
mongoose.plugin(slug);

Course.plugin(mongooseDelete, {
    deletedAt : true ,
    overrideMethods: 'all' });

module.exports = mongoose.model('Course', Course);