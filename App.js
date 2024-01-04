import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import { ScrollView, NativeViewGestureHandler } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



const Stack = createNativeStackNavigator();


export default function App() {

 





  return (
    <>


      {/* <ScrollView> */}
        
           
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'
    screenOptions={{
    headerShown:false,
    }}
    
    
    
    
    >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Register" component={Register} />

  </Stack.Navigator>
  </NavigationContainer>



      
        
      {/* </ScrollView> */}
    
  
  </>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
