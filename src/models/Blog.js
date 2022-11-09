import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title: {
       type: String,
       required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default:
           "https://marg-marg.s3.ap-southeast-2.amazonaws.com/code_background.jpg" 
    },
    date: {
        type: Date,
        default: new Date,
        require: true
    }
})

const Blog = mongoose.models.Blog || mongoose.model("Blog", schema);

export default Blog;