import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from "../../../utils/db";
import Blog from '../../../models/Blog';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { method } = req

  await connectToDatabase()

  switch(method) {
    case 'POST':
      try {
        const { title, content, image } = req.body;

        const newBlog = new Blog({
          title,
          content,
          image,
        })

        const result = await newBlog.save();

        return res.status(201).json({scucess:'true', result})
        
      } catch(error) {
        return res.status(400).json({success: false})
      }
    
    case 'GET':
      try {
        const blogs = await Blog.find();

        return res.status(200).json(blogs);

      } catch (error) {
        return res.status(400).json({success: false})
      }
  }
    
}