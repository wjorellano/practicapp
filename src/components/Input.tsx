import React from 'react';
import { Text, TextInput, View } from 'react-native';

interface InputProps {
   label?: string,
   placeholder: string,
   value: string,
   onChangeText: (text: string) => void,
   secureTextEntry?: boolean,
   name?: string
}

const Input = ({ placeholder, value, onChangeText, secureTextEntry, label }: InputProps) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
         placeholder={placeholder}
         value={value}
         onChangeText={onChangeText}
         secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

export default Input;