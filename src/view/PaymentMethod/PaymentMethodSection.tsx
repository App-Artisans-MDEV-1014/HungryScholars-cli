import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface PaymentMethodProps {
}

const PaymentMethodSection: React.FC<PaymentMethodProps> = (props) => {
  const paymentMethods = [
    { id: '1', name: 'Debit Card', icon: require('../../../assets/images/logo.png') },
    { id: '2', name: 'Credit Credit', icon: require('../../../assets/images/logo.png') },
    { id: '3', name: 'PayPal', icon: require('../../../assets/images/logo.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
      <Text style={styles.paymentHeader}>Choose a payment method</Text>
      <View style={styles.paymentOptionsContainer}>
        {paymentMethods.map((method) => (
          <TouchableOpacity key={method.id} style={styles.paymentOption}>
            <Image source={method.icon} style={styles.paymentMethodIcon} />
            <Text style={styles.paymentMethodName}>{method.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242428',
    flex:1
  },
  
  innercontainer: {
    margin:30,
  },
  paymentHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  paymentOptionsContainer: {
    marginTop: 10, 
  },
  paymentOption: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 10,
  },
  paymentMethodIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  paymentMethodName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default PaymentMethodSection;
