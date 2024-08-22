import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {AppContext} from '../AppContext';
import React, {useContext, useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import TextInputComponent from '../components/TextInputComponent';

import {useDispatch, useSelector} from 'react-redux';
import {DangNhapTaiKhoan} from '../reducers/LoginSlice';

const {width, height} = Dimensions.get('window');

const DangNhap = props => {
  const {navigation} = props;
  const {setIsLogin, isLogin} = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusCheck, setStatusCheck] = useState(false);
  const [err, setErr] = useState('');

  const dispatch = useDispatch();
  const {loginData, loginStatus} = useSelector(state => state.login);

  useEffect(() => {
    console.log(loginStatus, loginData);
    if (loginStatus == 'succeeded') {
      try {
        if (loginData.status) {
          setIsLogin(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [loginStatus]);

  const onPressLogin = async () => {
    try {
      if (!email || !password) {
        setErr('Email or Password is empty!');
        return;
      }
      dispatch(DangNhapTaiKhoan({email, password}));
      const body = {
        email: userAccount,
        password: password,
      };
      // console.log(body);
      const response = await AxiosInstance().post('/users/login', body);
      console.log(response);
      if (response.status == true) {
        Alert.alert('Đăng nhập thành công');
        setIsLogin(true);
      } else {
        Alert.alert('Tài khoản không tồn tại');
      }
    } catch (error) {
      console.log('Lỗi >>>>', error);
    }
  };

  //
  const onChangeTextInput1 = data => {
    setEmail(data);
    setErr('');
  };
  const onChangeTextInput2 = data => {
    setPassword(data);
    setErr('');
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View>
          <Image
            source={require('../../assets/img/img1.png')}
            style={styles.bgImage}
          />
          <Image
            source={require('../../assets/img/back.png')}
            style={styles.backButton}
          />
        </View>
        <View style={styles.body}>
          <View>
            <Text style={styles.welcome}>Chào mừng bạn</Text>
          </View>
          <View>
            <Text style={styles.title}>Đăng nhập tài khoản</Text>
          </View>
          <View style={styles.inputGroup}>
            <TextInputComponent
              value={email}
              onChange={onChangeTextInput1}
              placeHolder="Nhập email hoặc số điện thoại"
              placeHolderColor={'#8B8B8B'}
              borderColorFocus={'green'}
            />
            <TextInputComponent
              value={password}
              onChange={onChangeTextInput2}
              placeHolder="Mật khẩu"
              placeHolderColor={'#8B8B8B'}
              borderColorFocus={'green'}
              isPassword
            />
          </View>
          {!err ? (
            ''
          ) : (
            <View>
              <Text style={styles.errText}>{err}</Text>
            </View>
          )}
          <View
            style={[
              styles.optionsContainer,
              !err ? {marginTop: 15} : {marginTop: 4},
            ]}>
            <TouchableOpacity
              style={styles.rememberContainer}
              onPress={() => {
                setStatusCheck(!statusCheck);
              }}>
              <View style={styles.checkContainer}>
                <View style={styles.circle}></View>
                {statusCheck ? (
                  <Image
                    source={require('../../assets/img/check.png')}
                    style={styles.checkIcon}
                  />
                ) : (
                  ''
                )}
              </View>
              <Text style={styles.rememberText}>Nhớ tài khoản</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotPwText}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>
          <LinearGradient
            colors={['#007537', '#4CAF50']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onPressLogin}>
              <Text style={styles.buttonLabel}>Đăng nhập</Text>
            </TouchableOpacity>
          </LinearGradient>
          <View style={styles.orContainer}>
            <View style={styles.line}></View>
            <Text style={styles.or}>Hoặc</Text>
            <View style={styles.line}></View>
          </View>
          <View style={styles.mediaGroup}>
            <Image source={require('../../assets/img/fb.png')} />
            <Image source={require('../../assets/img/gg.png')} />
          </View>
          <View style={styles.linkContainer}>
            <Text style={styles.question}>Bạn không có tài khoản</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <Text style={styles.link}>Tạo tài khoản</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DangNhap;

const styles = StyleSheet.create({
  errText: {
    marginTop: 6,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 11,
    color: '#CE0000',
  },
  errInput: {
    width: '100%',
    height: 46,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    lineHeight: 23,
    paddingLeft: 14,
  },
  eyeButton: {
    position: 'absolute',
    top: 11,
    right: 15,
  },
  backButton: {
    position: 'absolute',
    top: 36,
    left: 20,
  },
  bgImage: {
    width: '100%',
    height: height * 0.42,
  },
  link: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 18,
    color: '#009245',
  },
  question: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 18,
    color: '#000',
  },
  linkContainer: {
    marginTop: 29,
    flexDirection: 'row',
    gap: 7,
    justifyContent: 'center',
  },
  mediaGroup: {
    marginTop: 35,
    gap: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    width: width * 0.33,
    height: 2,
    backgroundColor: '#4CAF50',
  },
  or: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 18,
    color: '#000',
  },
  orContainer: {
    marginTop: 21,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonLabel: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    lineHeight: 30,
    color: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 15,
  },
  rememberText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
    lineHeight: 17,
    color: '#949090',
  },
  forgotPwText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
    lineHeight: 17,
    color: '#009245',
  },
  checkIcon: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  circle: {
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#949090',
  },
  checkContainer: {
    width: 20,
    height: 20,
  },
  rememberContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 46,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#8B8B8B',
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    lineHeight: 23,
    paddingLeft: 14,
  },
  inputGroup: {
    marginTop: 20,
    gap: 10,
  },
  welcome: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    lineHeight: 45,
    color: '#000',
    textAlign: 'center',
  },
  title: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
  },
  body: {
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
});
