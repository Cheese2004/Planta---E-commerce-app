import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const DanhMuc = () => {
  const catArr = ['Tất cả', 'Hàng mới về', 'Ưa bóng', 'Ưa nắng'];
  const [selectedCategory, setSelectedCategory] = useState(catArr[0]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Image source={require('../../../assets/img/back_outline.png')} />
        </TouchableOpacity>
        <Text style={styles.title}> CÂY TRỒNG</Text>
        <Image source={require('../../../assets/img/shopping_cart.png')} />
      </View>
      <View style={styles.categoryListContainer}>
        {catArr.map((item, index) => {
          setSelectedCategory(item);
          return (
            <TouchableOpacity
              style={selectedCategory == item ? styles.selectedItem : ''}>
              <Text
                style={[
                  styles.itemLabel,
                  selectedCategory == item
                    ? styles.selectedCatLabel
                    : styles.catLabel,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default DanhMuc;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 24,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: '#221F1F',
  },
  selectedItem: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#009245',
  },
  itemLabel: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  selectedCatLabel: {
    color: '#fff',
  },
  catLabel: {
    color: '#7D7B7B',
  },
});
