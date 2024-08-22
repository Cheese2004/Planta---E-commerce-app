import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const TextInputComponent = props => {
  const {
    value,
    onChange,
    placeHolder,
    isPassword = false,
    placeHolderColor,
    borderStyle,
    borderColorFocus,
  } = props;

  // const borderColor = borderStyle?.borderColor ?? 'gray';
  const [secure, setSecure] = useState(isPassword);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <View
      style={[
        styles.input,
        styles.borderStyle,
        isFocused ? {borderColor: borderColorFocus, borderWidth: 2} : {},
      ]}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={isFocused ? '' : placeHolder}
        placeholderTextColor={placeHolderColor ?? 'black'}
        secureTextEntry={secure}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{flex: 1}}
      />
      {isPassword && (
        <TouchableOpacity
          onPress={() => setSecure(!secure)}
          style={styles.eyeButton}>
          {secure ? (
            <Image source={require('../../assets/img/show.png')} />
          ) : (
            <Image source={require('../../assets/img/hide.png')} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  eyeButton: {
    position: 'absolute',
    top: 11,
    right: 15,
  },
  input: {
    width: '100%',
    height: 46,
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    lineHeight: 23,
    paddingLeft: 14,
  },
  borderStyle: {
    borderColor: '#8B8B8B',
    borderRadius: 10,
    borderWidth: 1,
  },
});
