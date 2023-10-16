import React, { useState } from 'react'
import { StatusBar, StyleSheet, View, Text, Pressable, TouchableOpacity } from 'react-native';
import COLORS from '../Propeties/colors';
import { TextInput } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import items from '../Propeties/Items';
import { useNavigation } from '@react-navigation/native';
import suppliers from '../Propeties/supplier';


const PurcahseOrder = () => {
  const navigation = useNavigation();

  const [selectedSupplier, setSelectedSupplier] = useState('');
  const [selectedSupplierData, setSelectedSupplierData] = useState(null);
  
  const handleSupplierChange = (itemValue) => {
    setSelectedSupplier(itemValue);
    const supplierData = suppliers.find((supplier) => supplier.supplierName === itemValue);
    if (supplierData) {
      setSelectedSupplierData(supplierData);
    } else {
      // Handle the case where no supplier data is found
      setSelectedSupplierData(null); // Reset the selectedSupplierData
      // You can also display an error message or take other appropriate action here
    }  };

    const handleNextButtonPress = () => {
      if (selectedSupplierData) {
        navigation.navigate('OrderItems', {
          supplier: selectedSupplierData.supplierName,
          contactNumber: selectedSupplierData.contactNo,
          companyName: selectedSupplierData.companyName,
        });
      } else {
        // Handle the case where selectedSupplierData is null
        alert("Failed")
      }
    };

  return(
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={false} />

      <View style={styles.headingContainer}>
        <Text style={styles.heading}>New Purchase Order</Text>
      </View>
      <Text style={styles.label}>Supplier</Text>
      <Picker
        selectedValue={selectedSupplier}
        onValueChange={handleSupplierChange}        
        style={styles.picker}
      >
        <Picker.Item label="Select Supplier" value="" />
        {suppliers.map((supplier) => (
          <Picker.Item key={supplier.id} label={supplier.supplierName} value={supplier.supplierName} />
        ))}
      </Picker>
      {selectedSupplierData && (
        <>
          <Text style={styles.label}>Company Name</Text>
          <TextInput
            placeholder="Company Name"
            value={selectedSupplierData.companyName}
            style={styles.input}
            editable={false}
          />
          <Text style={styles.label}>Contact No</Text>
          <TextInput
            placeholder="Contact Number"
            value={selectedSupplierData.contactNo}
            style={styles.input}
            editable={false}
          />
        </>
      )}
      <View style={styles.buttonContainer}>
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
      justifyContent: 'center'

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
      marginLeft: 15,
      fontSize: 16
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


    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
      alignItems: 'center'
      
    },
    button: {
      backgroundColor: COLORS.primary,
      padding: 10,
      borderRadius: 10,
      marginLeft: 10,
      alignItems: 'center',
      width: '80%'
    },
    buttonText: {
      color: COLORS.white,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    },
  
  });
  

export default PurcahseOrder
