const express = require("express")
const app = express()
const cors = require("cors")
const { BlogdbModel } = require("./db")
const { NewArticleValidation } = require("./Validation")

app.use(express.json())
app.use(cors())


app.put('/Readmore',(req,res)=>{

})

app.get('/AllArticles',(req,res)=>{
    BlogdbModel.find({}).then((val)=>{
        res.json(val)
    })
})

app.put('/Edit',(req,res)=>{
    const id = req.body.id
    BlogdbModel.findByIdAndUpdate(id,{
        title:req.body.title,
        description:req.body.description,
        details:req.body.description
    }).then(()=>{
        res.json({
            msg:"Article Updated Successfully!"
        })
    })

})

app.put('/delete',(req,res)=>{
    const id = req.body.id
    BlogdbModel.deleteOne({ _id:id}).then(()=>{
        res.json({
            msg:"Article Deleted Successfully"
        })
    })

})

app.post('/NewArticle',(req,res)=>{
    const value = req.body
    const parsedValue = NewArticleValidation.safeParse(value)
    if(parsedValue.success) {
        const NewArticle = BlogdbModel(parsedValue.data)
        NewArticle.save().then(()=>{
            res.json({
                msg:"New article saved to database"
            })
        })
    }
    else {
        res.json({
            msg:"sorry invalid inputs"
        })
    }
   
})

app.listen(3003,()=>{
    console.log("listening on port 3003")
})