import { get, post } from './axios';

export const getAllBlog = async() => {
    const { data } = await get('/api/blog')
    return data
}

export const postBlog = async(data:any) => {
    await post('/api/blog', data)
}