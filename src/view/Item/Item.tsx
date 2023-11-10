import React, { FC, useState } from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import StarRating from '../StarRating/StarRating'; // Assuming the StarRating component is in a separate file
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

interface IProps {}

const Item: FC<IProps> = (props) => {
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Implement the logic to add the item to the cart here
    console.log(`Added ${quantity} items to the cart.`);
    navigation.navigate('Checkout');
  };

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#FFDD95" />
        </TouchableOpacity>
        
      </View>
    {/* Image */}
    <View style={styles.imageContainer}>
      <Image
          source={require('../../../assets/images/Burger.jpg')} // Replace with your local image path
          style={styles.image}
        />
      <View style={styles.overlay}>
        <Text style={styles.text}>Burger</Text>
        <StarRating rating={4.5} starSize={20} starColor="#FFDD95" />
      </View>
    </View>

    {/* Nutritional Information */}
    <View style={styles.nutritionalContainer}>
      <Text style={styles.heading}>Nutritional Information</Text>
      <View style={styles.nutritionalRow}>
        <View style={styles.column}>
          <Text style={styles.nutritionalItem}>Calories</Text>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../../assets/images/item_icon/calories.png')} 
              style={styles.icon}
            />
          </View>
          <Text style={styles.nutritionalItem}>0.0</Text> 
        </View>
        <View style={styles.column}>
          <Text style={styles.nutritionalItem}>Carbs</Text>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../../assets/images/item_icon/carb.png')} 
              style={styles.icon}
            />
          </View>
          <Text style={styles.nutritionalItem}>0.0</Text> 
        </View>       
        <View style={styles.column}>
          <Text style={styles.nutritionalItem}>Fat</Text>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../../assets/images/item_icon/fat.png')} 
              style={styles.icon}
            />
          </View>
          <Text style={styles.nutritionalItem}>0.0</Text> 
        </View>
        <View style={styles.column}>  
          <Text style={styles.nutritionalItem}>Protein</Text>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../../assets/images/item_icon/protein.png')} 
              style={styles.icon}
            />
          </View>
          <Text style={styles.nutritionalItem}>0.0</Text> 
        </View>
      </View>
    </View>
    <View style={styles.quantityContainer}>
        <View style={styles.quantityRow}>
          <TouchableOpacity style={styles.quantityButton} onPress={handleDecrement}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={handleIncrement}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
  </SafeAreaView>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242428',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop:10,
  },
  imageContainer: {
    position: 'relative',
    height: 300,
    width: '100%',
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  overlay: {
    position: 'absolute',
    left: 20,
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  text: {
    color: '#FFDD95',
    fontSize: 24,
    fontWeight: 'bold',
  },
  nutritionalContainer: {
    padding: 20,
  },
  heading: {
    color: '#FFDD95',

    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  nutritionalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  
    marginBottom: 5,
  },
  column: {
    flex: 1,
    textAlign:"center",
},
  nutritionalItem: {
    color: 'white',
    fontSize: 16,
    textAlign:"center",
  },
  nutritionalValue: {
    color: '#FFDD95',
    fontSize: 16,
  },
  iconContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop:5,
  paddingBottom:10,
  marginHorizontal: 10,
  height:50,
  },
  icon: {
    width: 40, // Adjust the width and height as needed for your icon
    height: 40,

  
  },
  quantityContainer: {
    padding: 20,
    marginTop: 10,
    backgroundColor: '#333',
  },
  quantityRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityButton: {
    backgroundColor: '#FFDD95',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  quantityText: {
    fontSize: 20,
    color: '#FFDD95',
  },
  addToCartButton: {
    backgroundColor: '#FFDD95',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Item;
