import React, { useState, FC } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Assuming the MenuItem interface is defined in another file
interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: any; // Use 'any' for image as we are using require() for now
}

// Assuming the RootStackParamList and RestaurantMenuScreenNavigationProp types are defined in another file
type RootStackParamList = {
  LaunchingScreen: undefined;
  SignInSignUp: undefined;
  SignUp: undefined;
  CustomerSupport: undefined;
  RestaurantMenuScreen: undefined;
  Item: { // Add the route params for the Item screen
    name: string;
    price: string;
    description: string;
  };
  // Add other screen names here as needed
};

type RestaurantMenuScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RestaurantMenuScreen'>;

interface IProps {
  // Pass the restaurant menu items as a prop to this component
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
    // Add more menu items as needed
  ];

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    // You can implement the search functionality here to filter the menu items based on the search query
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
    paddingHorizontal: 16, // Add left and right padding
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
    borderRadius: 20, // Add border radius for rounded corners
    marginBottom: 10,
    marginLeft: 10, // Add left margin
    marginRight: 10, // Add right margin
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
    flex: 0.5, // Add flex to make the image expand to fill the container
    marginRight: 10,
    marginLeft: 2,
    height: 80,
    width: 80,
  },
  itemDetails: {
    flex: 1, // Add flex to make the details container expand to fill the space
    marginRight: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 4, // Add padding between the name and description
    color: '#FFFFFF',
  },
  itemDescription: {
    fontSize: 16,
    color: '#BCBCBC',
    paddingBottom: 4, // Add padding between the description and pricing
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default RestaurantMenuScreen;
