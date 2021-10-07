import {useQuery} from 'react-query';
import {fetchPostByID, fetchPosts} from '.';

export const POSTS_KEY = 'posts';
export const usePostsQueryHook = () => {
  return useQuery(POSTS_KEY, async () => {
    return await fetchPosts();
  });
};

export const POSTS_DETAIL_KEY = 'postDetail';
export const usePostDetailQueryHook = (id: number) => {
  return useQuery([POSTS_KEY, id], async () => {
    return await fetchPostByID(id);
  });
};
