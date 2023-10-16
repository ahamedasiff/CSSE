import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '../Propeties/colors';

const OrderConfirmation = ({ route, navigation }) => {
  const {
    supplier,
    contactNumber,
    companyName,
    selectedProducts,
    total,
  } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Supplier Details</Text>
        <Text style={styles.detail}>Supplier: {supplier}</Text>
        <Text style={styles.detail}>Contact Number: {contactNumber}</Text>
        <Text style={styles.detail}>Company Name: {companyName}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>Order Details</Text>
        {selectedProducts.map((product, index) => (
          <Text key={index} style={styles.detail}>
            Product: {product.product} - : {product.quantity}
          </Text>
        ))}
        <Text style={styles.totalPrice}>Total Price: {total.toFixed(2)}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => {
            // Handle the confirm action here
          }}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => {
            // Handle the cancel action here
            navigation.goBack(); // Navigate back to the previous screen
          }}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',

  },
  card: {
    backgroundColor: COLORS.light,
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  confirmButton: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OrderConfirmation;
