import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DangKi from './DangKi';
import DangNhap from './DangNhap';
const Stack = createNativeStackNavigator();
const AuthenStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={DangNhap} />
      <Stack.Screen name="Register" component={DangKi} />
    </Stack.Navigator>
  );
};

export default AuthenStackNavigation;
