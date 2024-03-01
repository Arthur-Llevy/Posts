import type { Posts } from '../types/HomeViewTypes.ts';
import axios from 'axios';

const baseURL: string = 'http://localhost:5001/posts/';

const getAllPosts = async (): Promise<Posts[]> => {
    let posts: Posts[] = [];

    try {
        await axios.get(baseURL)
        .then(response => posts = response.data);
        return posts;
    } catch (err) {
        return [];
    }

};

const createPost = async (content: string) => {
    try {
        let newPost: Posts = await axios.post(baseURL, {
            content: content,
        })
    } catch (err) {
        return err;
    }
};

const deletePostById = async (id: number): Promise<string> => {
    try {
        let deletedPost: Posts = await axios.delete(`${baseURL}${id}`);
        return `Post excluído.`;
    } catch(err) {
        return "Ocorreu um erro ao deletar o post."
    }
};

export {
    getAllPosts,
    deletePostById,
    createPost
}