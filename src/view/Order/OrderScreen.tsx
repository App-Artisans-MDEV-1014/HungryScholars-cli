import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  LaunchingScreen: undefined;
  SignInSignUp: undefined;
  SignUp: undefined;
  OrderScreen: undefined;
};

type OrderScreenNavigationProp = StackNavigationProp<RootStackParamList, 'OrderScreen'>;

interface Props {
  navigation: OrderScreenNavigationProp;
}

// Define the data structure for previous orders
type OrderItem = {
  id: number;
  items: string;
  total: number;
};

// Sample data for previous orders
const previousOrders: OrderItem[] = [
  { id: 1, items: 'Pizza, Coke', total: 15 },
  { id: 2, items: 'Burger, Fries', total: 10 },
  { id: 3, items: 'Pasta, Salad', total: 12 },
];

const OrderScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedOrder, setSelectedOrder] = useState<OrderItem | null>(null);

  const handleOrderAgain = (order: OrderItem) => {
    setSelectedOrder(order);
  };

  const renderOrderItem = ({ item }: { item: OrderItem }) => (
    <View
      style={styles.orderContainer}
    >
      <Text style={styles.orderText}>Items: {item.items}</Text>
      <View style={styles.orderHistoryContainer}>
        <View style={styles.orderHistoryIcon} />
        <View style={styles.orderHistoryIcon} />
        <View style={styles.orderHistoryIcon} />
      </View>
      <Text style={styles.orderText}>Total: ${item.total}</Text>
      <TouchableOpacity style={styles.orderButton} onPress={() => handleOrderAgain(item)}>
        <Text style={styles.orderButtonText}>Order Again</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        {/* Orders Text */}
        <Text style={styles.ordersText}>Previous Orders</Text>
      </View>

      {/* FlatList of previous orders */}
      <FlatList
        data={previousOrders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.orderList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242428',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    backgroundColor: '#242428',
    paddingHorizontal: 16,
  },
  ordersText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFDD95',
  },
  orderList: {
    padding: 16,
  },
  orderContainer: {
    backgroundColor: '#646465',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  selectedOrder: {
    backgroundColor: '#FFDD95',
  },
  orderText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#FFDD95',
  },
  orderButton: {
    backgroundColor: '#FFDD95',
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#242428',
  },
  orderHistoryContainer: {
    flexDirection: 'row',
    
    marginBottom: 8,
  },
  orderHistoryIcon: {
    padding: 15,
    width: 10,
    height: 10,
    borderRadius: 30,
    backgroundColor: '#FFDD95',
    marginHorizontal: 4,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#242428',
  },
});

export default OrderScreen;
