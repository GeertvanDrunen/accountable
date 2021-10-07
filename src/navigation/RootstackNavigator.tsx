import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/home';
import ItemDetails from '../screens/item-details';
import {RootStackParamList} from '../typings/RootstackParamlist';

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator: React.FunctionComponent = () => {
  return (
    <RootStack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerStyle: {
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
            width: 0,
          },
        },
      }}>
      <RootStack.Screen
        options={() => ({
          headerShown: false,
        })}
        name="Home"
        component={Home}
      />
      <RootStack.Screen
        options={() => ({
          headerShown: false,
        })}
        name="ItemDetails"
        component={ItemDetails}
      />
    </RootStack.Navigator>
  );
};
export default RootStackNavigator;
