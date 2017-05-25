const mongoose = require('mongoose');

const { Schema } = mongoose;

const TestModel = new Schema({
    generatedId: {
        type: String,
        default: () => Math.random() + '',
    },
    data: {
        type: String,
    },
});

TestModel.statics.getAll = function () {
    return this.find({}).exec();
}

module.exports = mongoose.model('testModel', TestModel);