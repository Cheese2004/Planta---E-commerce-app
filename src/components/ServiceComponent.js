import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

const ServiceComponent = props => {
  const {title, data} = props;
  return (
    <View style={styles.serviceContainer}>
      <Text style={styles.title}>{title}</Text>
      {renderService(data)}
    </View>
  );
};

const renderService = data => {
  return data.map((item, index) => {
    return (
      <View style={styles.serviceItem} key={index}>
        <View style={styles.inf}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image source={item.image} style={styles.img} />
        </View>
      </View>
    );
  });
};
export default ServiceComponent;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 34,
    color: '#221F1F',
  },
  itemContainer: {
    marginTop: 15,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: height * 0.17,
    width: '100%',
    borderRadius: 8,
  },
  serviceContainer: {
    marginTop: 30,
    paddingHorizontal: 24,
  },
  inf: {
    flex: 2,
    height: '100%',
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#F6F6F6',
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  name: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: '#000',
  },
  desc: {
    marginTop: 2,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#7D7B7B',
    width: 176,
  },
  imgContainer: {
    flex: 1,
  },
  img: {
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
});
