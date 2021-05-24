const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    businessKey: {
        type: String
    },
    name: {
        type: String
    },
    birthday: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    cpf: {
        type: String
    },
    rg: {
        type: String
    },
    gender: {
        type: String
    },
    address: {
        zipCode: {
            type: String
        },
        street: {
            type: String
        },
        complement: {
            type: String
        },
        number: {
            type: Number
        },
        neighborhood: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        country: {
            type: String
        }
    },
    about: {
        type: String
    }
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;