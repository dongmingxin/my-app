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
    case 'GET':
      try {
        const query = req.query;
        const { blogId } = query;
        const blogs = await Blog.findById(blogId)

        return res.status(200).json(blogs);

      } catch (error) {
        return res.status(400).json({success: false})
      }
  }
    
}