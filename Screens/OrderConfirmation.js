import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../Propeties/colors';
import { useRoute } from '@react-navigation/native';


const OrderConfirmation = ({ navigation }) => {
    const route = useRoute();
    const { supplier, orderId, contactNumber, orderDate, total, items } = route.params;
    const [selectedItem1, setSelectedItem1] = useState(null);
    const [quantity1, setQuantity1] = useState('');

    

    return (
        <View>
      {/* Display Purchase Order Details */}
      <Text style={styles.label}>Supplier Name - {supplier}</Text>
      <Text style={styles.label}>Order ID - {orderId}</Text>
      <Text style={styles.label}>Contact Number - {contactNumber}</Text>
      {/* <Text style={styles.label}>Order Date - {orderDate.toDateString()}</Text> */}

      {/* Display Ordered Items and Quantities */}
      {items?.map((item, index) => (
        <Text key={index} style={styles.label}>
          Ordered Item {index + 1} - {item.item}, Quantity - {item.quantity}
        </Text>
      ))}


      {/* Display Total Price */}
      <Text style={styles.label}>Total Price - ${total.toFixed(2)}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    label: {
      marginTop: 10,
      marginLeft: 15,
    },
    orderedItemsContainer: {
      marginTop: 20,
    },
    orderedItem: {
      marginLeft: 15,
      marginBottom: 5,
      fontSize: 16,
    },
    button: {
      backgroundColor: COLORS.primary,
      padding: 10,
      borderRadius: 10,
      margin: 10,
      marginTop: 30,
    },
    buttonText: {
      color: COLORS.white,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    // Other styles as needed
  });

export default OrderConfirmation
