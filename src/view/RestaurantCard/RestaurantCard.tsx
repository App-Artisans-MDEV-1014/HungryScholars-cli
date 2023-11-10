import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface IRestaurant {
  id: string;
  title: string;
  image: string;
  minCharge: string;
  rating: string;
  titlMC: string;
  url_menucat: string;
  type: string[];
}

interface IProps {
  restaurants: IRestaurant[];
}

const imgrestaurant = {
  image: 'https://picsum.photos/1200/600',
};

const RestaurantCard: React.FC<IProps> = ({ restaurants }) => {
  console.log(restaurants);
  return (
    <View style={styles.container}>
      {restaurants.map((restaurant) => (
        <View key={restaurant.id} style={styles.card}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: imgrestaurant.image }} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.name}>{restaurant.title}</Text>
              <Text style={styles.rating}>Rating: {restaurant.rating}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10, // Add margin between each card
  },
  card: {
    marginBottom: 10, // Add additional margin for each card
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    backgroundColor: '#ccc',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  rating: {
    fontSize: 14,
    color: '#fff',
  },
});

export default RestaurantCard;
