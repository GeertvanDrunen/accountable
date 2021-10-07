import {PROPERTY_TYPES} from '@babel/types';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import React from 'react';
import {FlatList, Pressable, Text} from 'react-native';
import {usePostDetailQueryHook} from '../api/hooks';
import {Post} from '../api/typings';
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
  const postDetailQuery = usePostDetailQueryHook(props.route.params.id);

  return (
    <>
      {!postDetailQuery.isLoading &&
      !postDetailQuery.isFetching &&
      postDetailQuery.data ? (
        <>
          <Text>{postDetailQuery.data.body}</Text>
          <Pressable
            onPress={() => {
              //
            }}>
            Delete item from list
          </Pressable>
        </>
      ) : (
        <Text>Could not fetch data</Text>
      )}
    </>
  );
};

export default ItemDetails;
