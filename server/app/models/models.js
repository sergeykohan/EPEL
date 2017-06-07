const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
    provider: {
        type: String,
        required: true,
    },
    providerId: {
        type: String,
        required: true,
    },
    displayName: {
        type: String,
        default: ''
    },
    picture: {
        type: String,
        default: '',
    },
    payment: {
        accountNumber: String,
        cardNumber: Number,
        expires: String,
    },
    optIn: {
        type: Boolean,
        default: false,
    }
});

User.statics.findOrCreate = function (profile) { // { providerId, provider, displayName, picture }
    return this.findOne({ providerId: profile.providerId, provider: profile.provider })
        .exec()
        .then((user) => {
            if (user) {
                return user;
            }

            return new this(profile).save();
        });
};

User.statics.setOptIn = function (id, optIn) {
    return this.findOneAndUpdate(id, { optIn })
        .exec();
};

User.statics.setPayment = function (payment) {
    return this.findById(id)
        .exec()
        .then((user) => {
            Object.assign(user.payment, payment);

            return user.save();
        });
}

const Host = new Schema({
    displayName: {
        type: String,
        default: ''
    },
    alias: {
        type: String,
        unique: true,
    },
    menu: [{
        category: {
            name: String,
            items: [{
                title: String,
                description: {
                    type: String,
                    default: '',
                },
                price: Number,
                picture: String,
            }]
        }
    }],
});

Host.statics.findByAlias = function (alias) {
    return this.find({ alias })
        .exec();
};

module.exports = {
    User: mongoose.model('UserModel', User),
    Host: mongoose.model('HostModel', Host),
};