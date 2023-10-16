import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useRoute } from '@react-navigation/native';
import items from '../Propeties/Items';
// import { Picker } from '@react-native-picker/picker';
import COLORS from '../Propeties/colors';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const OrderItems = ({ navigation }) => {

  const route = useRoute();
  const { supplier, contactNumber, companyName } = route.params;

  console.log('selectedProducts:', supplier);
  console.log('quantities:', contactNumber);
  console.log('totalPrice:', companyName);

 const [totalPrice, setTotalPrice] = useState(0);

 const [productInputs, setProductInputs] = useState(
  items.map((item) => ({ product: item.product, quantity: '' }))
);

  const handleQuantityChange = (text, index) => {
    const updatedInputs = [...productInputs];
    updatedInputs[index].quantity = text;
    setProductInputs(updatedInputs);
    calculateTotalPrice(updatedInputs);
  };


  const calculateTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < productInputs.length; i++) {
      const productInput = productInputs[i];
      const item = items.find((item) => item.product === productInput.product);
      if (item) {
        const quantity = parseInt(productInput.quantity, 10);
        if (!isNaN(quantity)) {
          total += item.price * quantity;
        }
      }
    }
    setTotalPrice(total);
  };

  const handleNextButtonPress = () => {
    navigation.navigate('OrderConfirmation', {
      supplier,
      contactNumber,
      companyName,
      selectedProducts: productInputs,
      total: totalPrice,
    });
  };

  return(
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <StatusBar />
        <View style={styles.card}>
          <Text style={styles.heading}>Select Products and Quantities</Text>
          {productInputs.map((input, index) => (
            <View key={index} style={styles.productContainer}>
              <TextInput
                style={styles.productInput}
                placeholder="Product"
                value={input.product}
                editable={false} // Make it non-editable
              />
              <TextInput
                style={styles.quantityInput}
                placeholder="Quantity"
                keyboardType="numeric"
                value={input.quantity}
                onChangeText={(text) => handleQuantityChange(text, index)}
              />
            </View>
          ))}
          <Text style={styles.totalPrice}>Total Price: {totalPrice.toFixed(2)}</Text>
          <TouchableOpacity onPress={handleNextButtonPress} style={styles.button}>
          <Text style={styles.buttonText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
    </View>
  )
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center'

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
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  productInput: {
    flex: 2,
    marginRight: 10,
    borderWidth: 1,
    color: COLORS.dark,
    borderColor: COLORS.dark,
    borderRadius: 5,
    padding: 5,
    fontSize: 15
  },
  quantityInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.dark,
    borderRadius: 5,
    padding: 5,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default OrderItems
