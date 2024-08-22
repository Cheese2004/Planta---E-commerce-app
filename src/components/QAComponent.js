import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';

const QAComponent = props => {
  const {data} = props;
  const [isShow, setIsShow] = useState(false);
  const onPressArrow = () => {
    setIsShow(!isShow);
  };
  const renderQAItem = item => {
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text style={styles.questionStyle}>{item.question}</Text>
          <TouchableOpacity onPress={onPressArrow}>
            <Image source={require('../../assets/img/arrow_down.png')} />
          </TouchableOpacity>
        </View>
        {isShow ? <Text style={styles.answerStyle}>{item.answer}</Text> : ''}
      </View>
    );
  };
  return <View>{renderQAItem(data)}</View>;
};

export default QAComponent;

const styles = StyleSheet.create({
  answerStyle: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: '#7D7B7B',
    lineHeight: 20,
    textAlign: 'justify',
    marginTop: 15,
  },
  questionStyle: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    color: '#000',
    lineHeight: 22,
    width: '85%',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
});
