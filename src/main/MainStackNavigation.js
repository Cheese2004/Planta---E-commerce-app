import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

//tabs
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import TrangChu from './tabs/TrangChu';
import TimKiem from './tabs/TimKiem';
import ThongBao from './tabs/ThongBao';
import TaiKhoan from './tabs/TaiKhoan';

const tabScreenOptions = ({route}) => {
  return {
    headerShown: false,
    tabBarIcon: ({focused}) => {
      if (route.name == 'Home') {
        if (focused) {
          return (
            <View style={styles.tabItem}>
              <Image source={require('../../assets/img/home.png')} />
              <View style={styles.dot}></View>
            </View>
          );
        }
        return <Image source={require('../../assets/img/home.png')} />;
      } else if (route.name == 'Search') {
        if (focused) {
          return (
            <View style={styles.tabItem}>
              <Image source={require('../../assets/img/search.png')} />
              <View style={styles.dot}></View>
            </View>
          );
        }
        return <Image source={require('../../assets/img/search.png')} />;
      } else if (route.name == 'Notifications') {
        if (focused) {
          return (
            <View style={styles.tabItem}>
              <Image source={require('../../assets/img/bell.png')} />
              <View style={styles.dot}></View>
            </View>
          );
        }
        return <Image source={require('../../assets/img/bell.png')} />;
      } else if (route.name == 'Account') {
        if (focused) {
          return (
            <View style={styles.tabItem}>
              <Image source={require('../../assets/img/user.png')} />
              <View style={styles.dot}></View>
            </View>
          );
        }
        return <Image source={require('../../assets/img/user.png')} />;
      }
    },
    tabBarShowLabel: false,
  };
};
const MainTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name="Home" component={TrangChu} />
      <Tab.Screen name="Search" component={TimKiem} />
      <Tab.Screen name="Notifications" component={ThongBao} />
      <Tab.Screen name="Account" component={TaiKhoan} />
    </Tab.Navigator>
  );
};

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChiTiet from './stack/ChiTiet';
import ChiTietSP from './stack/ChiTietSP';
import DanhMuc from './stack/DanhMuc';
import GioHang from './stack/GioHang';
import CayTrong from './stack/CayTrong';
import PhuKien from './stack/PhuKien';
import ThanhToan from './stack/ThanhToan';
import SuaTaiKhoan from './stack/SuaTaiKhoan';
import LichSu from './stack/LichSu';
import QA from './stack/QA';
const Stack = createNativeStackNavigator();
// stacks
const MainStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen
        name="AuthenStackNavigation"
        component={AuthenStackNavigation}
      /> */}
      <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
      <Stack.Screen name="Detail" component={ChiTiet} />
      <Stack.Screen name="DetailPro" component={ChiTietSP} />
      <Stack.Screen name="Cart" component={GioHang} />
      <Stack.Screen name="Category" component={DanhMuc} />
      <Stack.Screen name="Plants" component={CayTrong} />
      <Stack.Screen name="Accessories" component={PhuKien} />
      <Stack.Screen name="Payment" component={ThanhToan} />
      <Stack.Screen name="EditAccount" component={SuaTaiKhoan} />
      <Stack.Screen name="History" component={LichSu} />
      <Stack.Screen name="QA" component={QA} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;

const styles = StyleSheet.create({
  tabItem: {
    gap: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#221F1F',
  },
});
