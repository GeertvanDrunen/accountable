import React from 'react';
import {StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import FlashMessage from 'react-native-flash-message';
import {QueryClient, QueryClientProvider} from 'react-query';
import RootStackNavigator from './src/navigation/RootstackNavigator';
import {Provider} from 'react-redux';
import store from './src/store/store';

const queryClient = new QueryClient();

const App = () => {
  const navigationRef = React.useRef(null);

  return (
    <Provider store={store}>
      <View style={{flex: 1, height: '100%'}}>
        <QueryClientProvider client={queryClient}>
          <StatusBar barStyle="light-content" translucent={false} />

          <NavigationContainer ref={navigationRef}>
            <RootStackNavigator />
          </NavigationContainer>
          <FlashMessage floating={true} position={'bottom'} />
        </QueryClientProvider>
      </View>
    </Provider>
  );
};

export default App;
