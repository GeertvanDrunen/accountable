import {PROPERTY_TYPES} from '@babel/types';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import React from 'react';
import {FlatList, Pressable, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {usePostDetailQueryHook} from '../api/hooks';
import {Post} from '../api/typings';
import {useAppSelector} from '../store/hooks';
import {deletePost} from '../store/slices/postsSlice';
import {RootStackParamList} from '../typings/RootstackParamlist';

// type-safe navigation prop
type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ItemDetails'
>;
type ScreenRouteProp = RouteProp<RootStackParamList, 'ItemDetails'>;

type PropsFromNavigation = {
  navigation: ScreenNavigationProp;
  route: ScreenRouteProp;
};
//#endregion

type Props = PropsFromNavigation & {};

const ItemDetails: React.FunctionComponent<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const post = props.route.params.post;

  return post ? (
    <>
      <Text>{post.body}</Text>
      <Pressable
        style={{
          marginTop: 20,
        }}
        onPress={() => {
          dispatch(deletePost(post.id));
          props.navigation.goBack();
        }}>
        <Text>Delete item from list</Text>
      </Pressable>
    </>
  ) : null;
};

export default ItemDetails;
