import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, AlertButton, FlatList, View, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';
import AddItem from './components/AddItem';

import Header from './components/Header';
import ListItem, { Item } from './components/ListItem';

export default function App() {
  const [items, setItems] = useState<Item[]>([
    {id: uuid.v4(), text: 'Milk'},
    {id: uuid.v4(), text: 'Eggs'},
    {id: uuid.v4(), text: 'Bread'},
    {id: uuid.v4(), text: 'Juice'},
  ])

  const handleAddItem = (text: string) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{ text: 'OK' }]);
    } else {
      setItems(prevItems => ([{id: uuid.v4(), text}, ...prevItems]))
    }
  }

  const handleDeleteItem = (id: string | number[]) => {
    setItems(prevItems => prevItems.filter(item => item.id != id))
  }

  return (
    <View style={styles.container}>
      <Header title={'Shopping List'} />
      <AddItem onAddItem={handleAddItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} onDeleteItem={handleDeleteItem} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
