//test for the moongoose creating schema
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from "../../../utils/db";
import Test from '../../../models/test';

export default async function addTest(
    req: NextApiRequest,
    res: NextApiResponse
) {

    console.log( 'connecting to mongo');

    await connectToDatabase();

    console.log( 'connected to mongo');

    console.log('creating document');

    const test = await Test.create(req.body)

    console.log('created document');

    res.json({test})

    res.status(200).json({ name: 'Mingxin Dong'})
}