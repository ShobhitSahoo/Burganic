const mongoose = require("mongoose");
const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
        trim: true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    familySize : {
        type : String,
        required : true,
    }
})


// Now collection creation 
const FormCollection = new mongoose.model("FormCollection", formSchema);
module.exports = FormCollection;