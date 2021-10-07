import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import React from 'react';
import {FlatList, Pressable, Text} from 'react-native';
import {usePostsQueryHook} from '../api/hooks';
import {Post} from '../api/typings';
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
  const postsQuery = usePostsQueryHook();
  return (
    <>
      {!postsQuery.isLoading && !postsQuery.isFetching && postsQuery.data ? (
        <FlatList
          data={postsQuery.data}
          removeClippedSubviews={true}
          renderItem={({item}: {item: Post}) => {
            return (
              <Pressable
                onPress={() => {
                  props.navigation.navigate('ItemDetails', {
                    id: item.id,
                  });
                }}>
                <Text>{item.title}</Text>
              </Pressable>
            );
          }}
        />
      ) : (
        <Text>Could not fetch data</Text>
      )}
    </>
  );
};

export default Home;
