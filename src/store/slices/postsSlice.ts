import {createSlice} from '@reduxjs/toolkit';
import {Post} from '../../api/typings';

export interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.posts = [...state.posts, ...action.payload];
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(post => {
        return post.id !== action.payload;
      });
    },
  },
});

export const {addPosts, setPosts, deletePost} = postsSlice.actions;

export default postsSlice.reducer;
