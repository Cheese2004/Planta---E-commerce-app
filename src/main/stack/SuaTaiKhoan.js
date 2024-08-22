import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import ContentComponent from '../../components/ContentComponent';

const SuaTaiKhoan = props => {
  const {navigation} = props;
  const userInf = {
    name: 'Tạ Thị Thu Chi',
    email: 'chita@gmail.com',
    address: 'Tân Phú, Tp.HCM',
    phone: '',
  };
  const [isValid, setIsValid] = useState(false);

  const [fullname, setFullname] = useState(userInf.name);
  const [email, setEmail] = useState(userInf.email);
  const [address, setAddress] = useState(userInf.address);
  const [phone, setPhone] = useState(userInf.phone);
  const onPressBack = () => {
    navigation.goBack();
  };
  const onChangeFullname = data => {
    setFullname(data);
  };
  const onChangeEmail = data => {
    setEmail(data);
  };
  const onChangeAdress = data => {
    setAddress(data);
  };
  const onChangePhone = data => {
    setPhone(data);
  };
  return (
    <View>
      <HeaderComponent
        title="CHỈNH SỬA THÔNG TIN"
        onPressGoBack={onPressBack}
      />
      <View style={styles.container}>
        <View style={styles.avtContainer}>
          <Image
            source={require('../../../assets/img/avt.jpg')}
            style={styles.avtImg}
          />
        </View>

        <View style={styles.descContainer}>
          <Text style={styles.desc}>
            Thông tin sẽ được lưu cho lần mua kế tiếp.
          </Text>
          <Text style={styles.desc}>
            Bấm vào thông tin chi tiết để chỉnh sửa.
          </Text>
        </View>
        <View style={styles.infContainer}>
          <ContentComponent
            placeHolder="Họ và tên"
            value={fullname}
            onChange={onChangeFullname}
          />
          <ContentComponent
            placeHolder="Email"
            value={email}
            onChange={onChangeEmail}
          />
          <ContentComponent
            placeHolder="Địa chỉ"
            value={address}
            onChange={onChangeAdress}
          />
          <ContentComponent
            placeHolder="Số điện thoại"
            value={phone}
            onChange={onChangePhone}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={[
              styles.btn,
              isValid
                ? {backgroundColor: 'green'}
                : {backgroundColor: '#ABABAB'},
            ]}>
            <Text style={styles.btnLabel}>LƯU THÔNG TIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SuaTaiKhoan;

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 8,
    borderRadius: 8,
    marginTop: '80%',
  },
  btn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btnLabel: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: '#fff',
  },
  infContainer: {
    marginTop: 20,
    paddingHorizontal: 24,
  },
  desc: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#221F1F',
  },
  descContainer: {
    marginTop: 40,
    paddingHorizontal: 24,
  },
  avtContainer: {
    width: '100%',
    alignItems: 'center',
  },
  avtImg: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginTop: 24,
  },
  container: {
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
});
