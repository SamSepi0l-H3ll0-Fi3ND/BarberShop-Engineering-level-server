const mongoose= require('mongoose');

const ServiceSchema= mongoose.Schema ({
    title: {
        type: String,
        require: true
    },
    description: {
        type:String,
        require:true
    },
    price: {
        type:Number,
        require:true,
        min:0
    },
});

module.exports = mongoose.model('Service',ServiceSchema);