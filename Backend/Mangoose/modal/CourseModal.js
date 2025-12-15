const mongoose = require("mongoose")  // Changed from "mangoose" to "mongoose"

const courseSchema = new mongoose.Schema({
    title: {type: String,required: true
    },
    duration: {type: String,required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Course", courseSchema)