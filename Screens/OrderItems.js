import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useRoute } from '@react-navigation/native';
import items from '../Propeties/Items';
import { Picker } from '@react-native-picker/picker';
import COLORS from '../Propeties/colors';
import { TextInput } from 'react-native-gesture-handler';


const OrderItems = ({ navigation }) => {

  const route = useRoute();
  const { supplier, orderId, contactNumber, orderDate } = route.params;
  const [selectedItem1, setSelectedItem1] = useState(null);
  const [quantity1, setQuantity1] = useState('');
  const [selectedItem2, setSelectedItem2] = useState(null);
  const [quantity2, setQuantity2] = useState('');
  const [selectedItem3, setSelectedItem3] = useState(null);
  const [quantity3, setQuantity3] = useState('');
  const [totalPrice, setTotalPrice] = useState(0); // Initialize total price with 0

  const calculateTotalPrice = () => {
    let total = 0;

    // Calculate total for the first item
    if (selectedItem1 && quantity1) {
      const item = itemsArray.find((item) => item.id === selectedItem1);
      if (item) {
        total += item.price * parseInt(quantity1, 10);
      }
    }

    // Calculate total for the second item
    if (selectedItem2 && quantity2) {
      const item = itemsArray.find((item) => item.id === selectedItem2);
      if (item) {
        total += item.price * parseInt(quantity2, 10);
      }
    }

    // Calculate total for the third item
    if (selectedItem3 && quantity3) {
      const item = itemsArray.find((item) => item.id === selectedItem3);
      if (item) {
        total += item.price * parseInt(quantity3, 10);
      }
    }

    // Update the state with the total price
    setTotalPrice(total);
  };

  const handleNextButtonPress = () => {
    const orderDetails = {
      supplier,
      orderId,
      contactNumber,
      orderDate,
    };

    const orderedItems = [
      { item: selectedItem1, quantity: quantity1 },
      { item: selectedItem2, quantity: quantity2 },
      { item: selectedItem3, quantity: quantity3 },
    ];

    navigation.navigate('OrderConfirmation', {
      orderDetails,
      orderedItems,
      total: totalPrice,
    });
  };


  return (
    <View>
        <View>
            <Picker
                selectedValue={selectedItem1}
                onValueChange={(itemValue) => setSelectedItem1(itemValue)}
                style={styles.input}
            >
                <Picker.Item label="Select an item" value={null} />
                {items.map((item) => (
                    <Picker.Item label={item.name} value={item.id} key={item.id} />
                ))}
            </Picker>
            <TextInput
                placeholder="Quantity"
                onChangeText={(text) => setQuantity1(text)}
                value={quantity1}
                style={styles.input}
                keyboardType="numeric"
            />
        </View>
        <View>
            <Picker
                selectedValue={selectedItem2}
                onValueChange={(itemValue) => setSelectedItem2(itemValue)}
                style={styles.input}
            >
                <Picker.Item label="Select an item" value={null} />
                {items.map((item) => (
                    <Picker.Item label={item.name} value={item.id} key={item.id} />
                ))}
            </Picker>
            <TextInput
                placeholder="Quantity"
                onChangeText={(text) => setQuantity2(text)}
                value={quantity2}
                style={styles.input}
                keyboardType="numeric"
            />
        </View>
        <View>
            <Picker
                selectedValue={selectedItem3}
                onValueChange={(itemValue) => setSelectedItem3(itemValue)}
                style={styles.input}
            >
                <Picker.Item label="Select an item" value={null} />
                {items.map((item) => (
                    <Picker.Item label={item.name} value={item.id} key={item.id} />
                ))}
            </Picker>
            <TextInput
                placeholder="Quantity"
                onChangeText={(text) => setQuantity3(text)}
                value={quantity3}
                style={styles.input}
                keyboardType="numeric"
            />
        </View>
        <Text style={{ textAlign: 'center', fontSize: 16 }}>
            Total Price: ${totalPrice.toFixed(2)}
      </Text>
        <TouchableOpacity onPress={handleNextButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
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
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        marginTop: 10,
        marginLeft: 15,
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10,
        borderWidth: 1,
        borderColor: COLORS.dark,
        borderRadius: 10,
        color: COLORS.dark,
    },
    button: {
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 10,
        margin: 10,
        marginTop: 30
      },
      buttonText: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
      },
    // You can add more styles for the button, labels, or other components as needed.
});

export default OrderItems
