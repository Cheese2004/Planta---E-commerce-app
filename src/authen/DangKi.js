import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
// import AxiosInstance from '../helpers/AxiosInstance';
import {useDispatch, useSelector} from 'react-redux';
import {DangKiTaiKhoan} from '../reducers/RegisterSlice';

const {width, height} = Dimensions.get('window');

const DangKi = props => {
  const {navigation} = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');
  const emailRegex = /^[a-z0-9._%+-]+@gmail.com$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-]).{8,}$/;
  const vnPhoneNumberRegex = /^((09|03|07|08|05)+([0-9]{8})\b)/g;

  const dispatch = useDispatch();
  const {registerData, registerStatus} = useSelector(state => state.register);

  const onPress = async () => {
    let isValidPassword = passwordRegex.test(pw);
    let isValidEmail = emailRegex.test(email);
    let isValidPhoneNumber = vnPhoneNumberRegex.test(phoneNum);
    try {
      if (!name || !email || !phoneNum || !pw) {
        setErr('Something is empty!');
        return;
      } else if (!isValidPassword || !isValidEmail || !isValidPhoneNumber) {
        setErr('Invalid Email or PhoneNumber or Password . Try again!');
        return;
      } else {
        setErr('');
        dispatch(DangKiTaiKhoan({name, email, phoneNum, pw}));
      }
      const body = {
        name: name,
        email: email,
        phone: phoneNum,
        password: pw,
      };
      console.log(body);
      const response = await AxiosInstance().post('/users/register', body);
      console.log('Đăng ký thành công: ', response);
      if (response.status) {
        console.log(response.status);
        Alert.alert('Đăng ký thành công');
        navigation.navigate('Login');
      } else {
        console.log(response.status);
        Alert.alert(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (registerStatus == 'succeeded') {
      try {
        if (registerData.status) {
          Alert('Đăng kí thành công');
          navigation.navigate('Login');
        } else {
          Alert(registerData.message);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [registerStatus]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <View>
          <Image
            source={require('../../assets/img/img2.png')}
            style={styles.headerImg}
          />
        </View>
        <View style={styles.body}>
          <View>
            <Text style={styles.welcome}>Đăng ký</Text>
          </View>
          <View>
            <Text style={styles.title}>Tạo tài khoản</Text>
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              placeholder="Họ tên"
              placeholderTextColor={'#B8B8C7'}
              value={name}
              onChangeText={text => setName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={'#B8B8C7'}
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Số điện thoại"
              placeholderTextColor={'#B8B8C7'}
              value={phoneNum}
              onChangeText={text => setPhoneNum(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Mật khẩu"
              placeholderTextColor={'#B8B8C7'}
              value={pw}
              onChangeText={text => setPw(text)}
            />
          </View>
          {!err ? (
            ''
          ) : (
            <View style={styles.errContainer}>
              <Text style={styles.errText}>{err}</Text>
            </View>
          )}
          <View style={styles.policyContainer}>
            <Text style={styles.policyText}>
              Để đăng ký tài khoản, bạn đồng ý{' '}
              <Text style={styles.highlightText}>Terms & Conditions </Text>and{' '}
              <Text style={styles.highlightText}> Privacy Policy</Text>
            </Text>
          </View>
          <LinearGradient
            colors={['#007537', '#4CAF50']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={styles.buttonLabel}>Đăng ký</Text>
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
            <Text style={styles.question}>Tôi đã có tài khoản</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.link}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DangKi;

const styles = StyleSheet.create({
  errText: {
    marginTop: 6,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 11,
    color: '#CE0000',
  },
  container: {
    backgroundColor: '#fff',
  },
  headerImg: {
    width: '100%',
    height: height * 0.27,
  },
  highlightText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 18,
    color: '#009245',
    textDecorationLine: 'underline',
  },
  policyText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 18,
    color: '#000',
    textAlign: 'center',
    width: 245,
  },
  policyContainer: {
    marginTop: 20,
    alignItems: 'center',
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
    marginTop: 30,
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
    marginTop: -15,
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    lineHeight: 47,
    color: '#000',
    textAlign: 'center',
  },
  title: {
    marginTop: 13,
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
  },
  // container: {
  //   width: '100%',
  //   height: '100%',
  // },
  body: {
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
});
