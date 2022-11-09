import { connectToDatabase } from "../../utils/db";
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    // name: string,
    // username: string,
    // passward: string,
    // address: string,
    // userCart: any,
    message:string
}

async function handler (
    req: NextApiRequest, 
    res: NextApiResponse<Data>
) {
    try {
        await connectToDatabase();
    } catch (error) {
        console.log(error)
    }

    
    res.status(200).json({message:'yes'})
}

export default handler;