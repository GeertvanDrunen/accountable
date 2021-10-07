import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import React, {useEffect} from 'react';
import {FlatList, Pressable, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchPosts} from '../api';
import {Post} from '../api/typings';
import {shuffleArray} from '../helpers';
import {useAppSelector} from '../store/hooks';
import {setPosts} from '../store/slices/postsSlice';
import {RootStackParamList} from '../typings/RootstackParamlist';

// type-safe navigation prop
type ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type ScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type PropsFromNavigation = {
  navigation: ScreenNavigationProp;
  route: ScreenRouteProp;
};
//#endregion

type Props = PropsFromNavigation & {};

const Home: React.FunctionComponent<Props> = (props: Props) => {
  const posts = useAppSelector(state => state.posts.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchPosts().then(response => {
      if (response) {
        dispatch(setPosts(response));
      }
    });
  }, [dispatch]);

  return (
    <>
      <FlatList
        data={posts}
        removeClippedSubviews={true}
        keyExtractor={(post, index) => String(post.title + index)}
        ListHeaderComponent={() => {
          return (
            <Pressable
              style={{
                marginBottom: 30,
              }}
              onPress={() => {
                dispatch(setPosts(shuffleArray(posts)));
              }}>
              <Text>shuffle list</Text>
            </Pressable>
          );
        }}
        renderItem={({item}: {item: Post}) => {
          return (
            <Pressable
              style={{marginBottom: 10}}
              onPress={() => {
                props.navigation.navigate('ItemDetails', {
                  post: item,
                });
              }}>
              <Text>{item.title}</Text>
            </Pressable>
          );
        }}
      />
    </>
  );
};

export default Home;
