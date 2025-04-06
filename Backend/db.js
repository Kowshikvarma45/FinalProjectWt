const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://BlogWebsite:vGI4Sc12WRkx6HCR@cluster0.c0hdkgh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Blogdatabase")

const QuestionSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    details:{
        type:String,
        require:true
    }
})

const BlogdbModel = mongoose.model("/data",QuestionSchema)

module.exports = {
    BlogdbModel
}
