import axios from 'axios';
import {Post} from './typings';

export const fetchPosts = async (): Promise<Post[] | false> => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    return response.data;
  } catch (err) {
    console.error('Something went wrong in the function fetchPosts', err);
    return false;
  }
};

export const fetchPostByID = async (id: number): Promise<Post | false> => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    return response.data;
  } catch (err) {
    console.error('Something went wrong in the function fetchPostByID', err);
    return false;
  }
};
