import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from './Propeties/colors';
import OrderHome from './Screens/OrderHome';
import PurcahseOrder from './Screens/PurcahseOrder';
import OrderItems from './Screens/OrderItems';
import OrderConfirmation from './Screens/OrderConfirmation';


const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='PurcahseOrder' component={PurcahseOrder} />      
        <Stack.Screen name='OrderItems' component={OrderItems} />      
        <Stack.Screen name='OrderConfirmation' component={OrderConfirmation} />      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
//  and upon confirming the form i need you to give me the codes to generate a report which will include all the booking details and 