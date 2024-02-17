const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
    type:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    sex:{
        type: String,
        required: true,
    },
    side:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    image:{
        url: String,
        public_id: String
    }
});


module.exports = mongoose.model('pets',petSchema);