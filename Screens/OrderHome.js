import { StatusBar } from 'expo-status-bar'
import { useState } from 'react';
import React from 'react'
import { ScrollView, Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import COLORS from '../Propeties/colors';

// const [hotelBookings, setHotelBookings] = useState([]);

//   useEffect(() => {
//     fetchHotelBookings();
//   }, []);

//   const fetchHotelBookings = () => {
//     axios.get('http://192.168.42.52:3000/hotel')
//       .then(response => {
//         setHotelBookings(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   };

//   const deleteBooking = async (id) => {
//     Alert.alert(
//         'Confirm Deletion',
//         'Are you sure you want to delete this package?',
//         [
//             {
//                 text: 'Cancel',
//                 style: 'cancel',
//             },
//             {
//                 text: 'Delete',
//                 onPress: async () => {
//                     await axios.delete(`http://192.168.42.52:3000/hotel/${id}`)
//                         .then(() => {
//                             // Alert.alert("Package Details Deleted Successfully");
//                             fetchHotelBookings();
//                             console.log('Booking deleted successfully');
//                         })
//                         .catch((err) => {
//                             // Alert.alert("Error occurred while deleting the details");
//                             console.error('Error:Error occurred while deleting the details', err);
//                         });
//                 },
//             },
//         ]
//     );
// };

function OrderHome() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={false} />
        <Text style={styles.heading}>Hotel Bookings</Text>
      <TouchableOpacity onPress={() => printAll()}>
      <Text style={styles.button}>Print All</Text>
      </TouchableOpacity>
      {hotelBookings.map(booking => (
        <View key={booking._id} style={styles.card}>
          <Text style={styles.cardText}>Hotel Name: {booking.hotelName}</Text>
          <Text style={styles.cardText}>Name: {booking.name}</Text>
          <Text style={styles.cardText}>Email: {booking.email}</Text>
          <Text style={styles.cardText}>Contact No: {booking.contactNo}</Text>
          <Text style={styles.cardText}>Suite Type: {booking.selectedSuite}</Text>
          <Text style={styles.cardText}>Check-In Date: {booking.checkInDate}</Text>
          <Text style={styles.cardText}>Check-Out Date: {booking.checkOutDate}</Text>

          <View style={styles.cardButtons}>
            <TouchableOpacity onPress={() => navigation.navigate('UpdateHotelBooking', { booking })}>
              <Text style={styles.button}>Update</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => deleteBooking(booking._id)}>
              <Text style={styles.button}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    card: {
      backgroundColor: 'white',
      padding: 16,
      margin: 10,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    cardText: {
      fontSize: 16,
      marginBottom: 8,
    },
    cardButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      padding: 10,
      backgroundColor: COLORS.primary,
      color: 'white',
      borderRadius: 5,
      textAlign:'center',
      fontSize: 18
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      margin: 10,
    },
  });
  

export default OrderHome
