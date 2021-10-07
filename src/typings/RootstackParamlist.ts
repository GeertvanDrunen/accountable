import {Post} from '../api/typings';

export type RootStackParamList = {
  Home: undefined;
  ItemDetails: {
    post: Post;
  };
};
