import React from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from "./src/store";
import BookListScreen from "./src/screens/BookListScreen";
import BookDetailScreen from "./src/screens/BookDetailScreen"; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="BookList" component={BookListScreen} options={{ title: 'Kitap Listesi' }} />
          <Stack.Screen name="BookDetail" component={BookDetailScreen} options={{ title: 'Kitap Detayı' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

