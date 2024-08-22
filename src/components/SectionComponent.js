import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
const childWidth = (width - 63) / 2;
const childHeight1 = height * 0.27;
const childHeight2 = height * 0.25;

const SectionComponent = props => {
  const navigation = useNavigation();
  const handlePress = item => {
    navigation.navigate('Detail', {
      productItem: item,
    });
  };
  const renderItem = data => {
    return (
      <ScrollView
        contentContainerStyle={styles.itemContainer}
        showsVerticalScrollIndicator={false}>
        {data.map((item, index) => {
          const arrImage = item?.images;
          return (
            <TouchableOpacity
              style={[
                !!item.images ? {height: childHeight1} : {height: childHeight2},
                styles.singItem,
              ]}
              key={index}
              onPress={() => handlePress(item)}>
              {!!item.images && (
                <Image source={arrImage[0]} style={styles.image} />
              )}
              {!!item.image && (
                <Image source={item.image} style={styles.image} />
              )}

              <Text style={styles.name}>{item.name}</Text>
              {!!item.type && <Text style={styles.type}>{item.type}</Text>}
              <Text style={styles.price}>{item.price}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };
  const {title, data, onPressMore = () => {}} = props;
  return (
    <View style={styles.sectionContainer}>
      {!!title && <Text style={styles.title}>{title}</Text>}
      {renderItem(data)}
      {!!title && (
        <TouchableOpacity
          onPress={() => {
            onPressMore();
          }}>
          <Text style={styles.linkMore}>Xem thêm {title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionComponent;

const styles = StyleSheet.create({
  linkMore: {
    marginTop: 15,
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    textDecorationLine: 'underline',
    color: '#221F1F',
    textAlign: 'right',
    marginRight: 30,
  },
  price: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: '#007537',
  },
  type: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#7D7B7B',
  },
  name: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: '#221F1F',
  },
  image: {
    width: '100%',
    height: childHeight1 * 0.62,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
  },
  title: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 34,
    color: '#221F1F',
  },

  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 7.5,
  },
  sectionContainer: {
    paddingHorizontal: 16.5,
  },
  singItem: {
    marginHorizontal: 7.5,
    marginVertical: 7.5,
    minWidth: childWidth,
    maxWidth: childWidth,
    borderRadius: 8,
  },
});
