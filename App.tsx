import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import AppNavigation from './src/AppNavigation';
import {AppProvider} from './src/AppContext';

import {Provider} from 'react-redux';
import {store} from './src/store/store';
function App(): React.JSX.Element {
  return (
    <AppProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar />
        <Provider store={store}>
          <AppNavigation />
          {/* <Test /> */}
        </Provider>
      </SafeAreaView>
    </AppProvider>
  );
}

export default App;
