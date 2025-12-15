const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/mycourse")
  .then(() => {
    console.log("DB Connection success.....")
  })
  .catch((err) => console.log(err))

const mycourse = require("./modal/CourseModal")

//get all courses
app.get("/api/courses", async(req, res) => {
    try {
        const courses = await mycourse.find()
        res.json(courses)
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
})

// get single course
app.get("/api/courses/:id", async(req, res) => {
    try {
        const course = await mycourse.findById(req.params.id)
        if(!course) {  
            return res.status(404).json({message: "Course not found"})
        }
        res.json(course)
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
})

//post
app.post("/api/courses", async(req, res) => {  
    try {
        const {title, duration} = req.body
        const course = new mycourse({title, duration})
        await course.save()
        res.status(201).json(course)
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
})

// update
app.put("/api/courses/:id", async(req, res) => { 
    try {
        const {title, duration} = req.body
        const updatecourse = await mycourse.findByIdAndUpdate(
            req.params.id,           
            {title, duration},        
            {new: true}            
        )
        if(!updatecourse) {
            return res.status(404).json({message: "Course not found"})  
        }
        res.json(updatecourse)  
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
})

//delete
app.delete("/api/courses/:id", async(req, res) => { 
    try {
        const course = await mycourse.findByIdAndDelete(req.params.id)
        if(!course) {
            return res.status(404).json({message: "Course not found"})
        }
        res.json({message: "Course deleted successfully"}) 
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
})

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))