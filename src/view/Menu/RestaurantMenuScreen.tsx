import React, { useState, FC } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: any; 
}

type RootStackParamList = {
  LaunchingScreen: undefined;
  SignInSignUp: undefined;
  SignUp: undefined;
  CustomerSupport: undefined;
  RestaurantMenuScreen: undefined;
  Item: {
    name: string;
    price: string;
    description: string;
  };
};

type RestaurantMenuScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RestaurantMenuScreen'>;

interface IProps {
  navigation: RestaurantMenuScreenNavigationProp;
}

const RestaurantMenuScreen: FC<IProps> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Burger',
      price: '$8.99',
      description: 'A delicious beef burger with cheese, lettuce, and tomato.',
      image: require('../../../assets/images/Burger.jpg'),
    },
    {
      id: '2',
      name: 'Pizza',
      price: '$12.50',
      description: 'A classic Margherita pizza with fresh mozzarella and basil.',
      image: require('../../../assets/images/Pizza.jpg'),
    },
  ];

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const handleItemPress = (item: MenuItem) => {
    // Navigate to the Item screen and pass the necessary item details as route params
    navigation.navigate('Item', { name: item.name, description: item.description, price: item.price });
  };

  const renderItem = ({ item }: { item: MenuItem }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => handleItemPress(item)}>
      <Image source={item.image} style={styles.itemImage} resizeMode="contain" />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#FFDD95" />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242428',
    paddingHorizontal: 16,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  searchBar: {
    padding: 10,
    fontSize: 18,
    backgroundColor: '#646465',
    borderRadius: 20,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  listContainer: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  itemImage: {
    flex: 0.5,
    marginRight: 10,
    marginLeft: 2,
    height: 80,
    width: 80,
  },
  itemDetails: {
    flex: 1,
    marginRight: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 4,
    color: '#FFFFFF',
  },
  itemDescription: {
    fontSize: 16,
    color: '#BCBCBC',
    paddingBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default RestaurantMenuScreen;
