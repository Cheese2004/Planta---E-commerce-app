import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigation from './main/MainStackNavigation';
import AuthenStackNavigation from './authen/AuthenStackNavigation';
import {AppContext} from './AppContext';
const AppNavigation = () => {
  const {isLogin} = useContext(AppContext);
  return (
    <NavigationContainer>
      {isLogin ? <MainStackNavigation /> : <AuthenStackNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
