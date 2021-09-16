import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface AddItemProps {
  onAddItem?: (item: string) => void;
}

function AddItem(props: AddItemProps) {
  const [text, setText] = useState<string>('');

  const handleChangeText = (textValue: string) => setText(textValue);

  const handleAddItem = () => {
    setText('');

    props.onAddItem?.(text);
  }

  return (
    <View>
      <TextInput style={styles.input} placeholder='Add Item...' onChangeText={handleChangeText}>
        {text}
      </TextInput>
      <TouchableOpacity style={styles.button} onPress={() => handleAddItem()}>
        <Text style={styles.buttonText}>
          <Icon name='plus' size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  buttonText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
