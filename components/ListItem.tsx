import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface Item {
  id: string | number[];
  text: string;
}

export interface ListItemProps {
  item: Item;
  onDeleteItem?: (id: string | number[]) => void;
}

function ListItem(props: ListItemProps) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{props.item.text}</Text>
        <Icon name='remove' size={20} color='firebrick' onPress={() => props.onDeleteItem?.(props.item.id)} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 1,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ListItem;
