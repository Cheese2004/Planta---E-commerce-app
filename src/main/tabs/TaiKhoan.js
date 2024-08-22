import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';

const TaiKhoan = props => {
  const {navigation} = props;
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <HeaderComponent onPressGoBack={onPressBack} title="PROFILE" />
      <View style={styles.container}>
        <View style={styles.infContainer}>
          <Image
            source={require('../../../assets/img/avt.jpg')}
            style={styles.avt}
          />
          <View>
            <Text style={styles.name}>Tạ Thị Thu Chi</Text>
            <Text style={styles.email}>chita@gmail.com</Text>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.headingRow}>Chung</Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditAccount')}>
            <Text style={styles.sectionItem}>Chỉnh sửa thông tin</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sectionItem}>Cẩm nang trồng cây</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('History')}>
            <Text style={styles.sectionItem}>Lịch sử giao dịch</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('QA')}>
            <Text style={styles.sectionItem}>Q & A</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.headingRow}>Bảo mật và Điều khoản</Text>
          <TouchableOpacity>
            <Text style={styles.sectionItem}>Điều khoản và điều kiện</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sectionItem}>Chính sách quyền riêng tư</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.sectionItem, {color: '#FF0000'}]}>
              Đăng xuất
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TaiKhoan;

const styles = StyleSheet.create({
  sectionItem: {
    color: '#000',
  },
  headingRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#ABABAB',
    color: '#7F7F7F',
    paddingBottom: 2,
  },
  sectionContainer: {
    marginTop: 30,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    lineHeight: 20,
    gap: 15,
  },
  container: {
    paddingHorizontal: 48,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  infContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 26,
  },
  avt: {
    width: 39,
    height: 39,
    borderRadius: 19.5,
  },
  name: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: '#000',
  },
  email: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#7F7F7F',
  },
});
