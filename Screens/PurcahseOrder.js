import React, { useState } from 'react'
import { StatusBar, StyleSheet, View, Text, Pressable, TouchableOpacity } from 'react-native';
import COLORS from '../Propeties/colors';
import { TextInput } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import items from '../Propeties/Items';
import { useNavigation } from '@react-navigation/native';


const PurcahseOrder = () => {
    const navigation = useNavigation();


    const [supplier, setSupplier] = useState('');
    const [orderId, setOrderId] = useState('');
    const [contactNumber, setContactNumber] = useState(''); // New state for contact number
    const [isDatePickerVisible, setDatePickerVisible] = useState(false)
    const [orderDate, setOrderDate] =  useState(new Date());
    const [showPicker, setShowPicker] = useState(null);


    const handleDateChange = (selectedDate) => {
        if (selectedDate) {
            setOrderDate(selectedDate);
            setShowPicker(false); // Close the date picker
          }
    }

    const showOrderDatePicker = () => {
        setShowPicker(true);
      };

      const handleNextButtonPress = () => {
        navigation.navigate('OrderItems', {
            supplier,
            orderId,
            contactNumber,
            // orderDate,
      //       total: totalPrice, // Pass the total price as a parameter
      // // Pass the selected items and quantities as parameters
      //       items: [
      //         { item: selectedItem1, quantity: quantity1 },
      //         { item: selectedItem2, quantity: quantity2 },
      //         { item: selectedItem3, quantity: quantity3 },
            // ],
          });
      };

  return (
    <View>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={false} />
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>New Purcahse Order</Text>
        </View>
        <Text style={styles.label}>Order ID</Text>
        <TextInput
            placeholder="Order ID"
            onChangeText={text => setOrderId(text)}
            value={orderId}
            style={styles.input}
        />
        <View>
            <Text style={styles.label}>Supplier</Text>
            <TextInput
            placeholder="Supplier"
            onChangeText={text => setSupplier(text)}
            value={supplier}
            style={styles.input}
        />
        <Text style={styles.label}>Contact No</Text>
            <TextInput
                placeholder="Contact Number"
                onChangeText={(text) => setContactNumber(text)} // Update contact number state
                value={contactNumber}
                style={styles.input}
            />
        
        {/* <View>
            <Text style={styles.label}>Order Date</Text>
            {showPicker && (
            <DateTimePicker
              mode="date"
              value={orderDate}
              onChange={handleDateChange}
              minimumDate={new Date()}
            />
          )}
            <Pressable onPress={showOrderDatePicker}>
              <TextInput
                style={styles.input}
                placeholder="Order Date"
                value={orderDate.toDateString()}
                editable={false}
              />
            </Pressable>
        </View> */}
        <TouchableOpacity onPress={handleNextButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    btn: {
      height: 55,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      backgroundColor: COLORS.primary,
      marginHorizontal: 20,
      borderRadius: 10,
      bottom: 0,
    },
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center'
    },
    headingContainer: {
        margin: 10,
        marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      textAlign: 'center',
    },
    label: {
      marginTop: 10,
      marginLeft: 15
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
      color: COLORS.dark
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      marginTop: 5,
    },
    hotelDetails: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
    dropdownContainer: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 10,
      marginBottom: 15,
    },
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      width: 300, // Set the width of the modal content
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
    },
    modalText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: COLORS.primary,
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
    button: {
      backgroundColor: COLORS.primary,
      padding: 10,
      borderRadius: 10,
      marginLeft: 10
    },
    buttonText: {
      color: COLORS.white,
      fontSize: 18,
      fontWeight: 'bold',
    },
  
  });
  

export default PurcahseOrder
