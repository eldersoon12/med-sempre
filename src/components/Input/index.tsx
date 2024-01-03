import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Feather';

interface PInput {
  type?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  value?: any;
  label?: string;
  onChange?: () => void;
}

export default function Input({
  type,
  placeholder = '',
  placeholderTextColor = '#A6BCDA',
  value,
  onChange,
  label,
}: PInput) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (type === 'password') {
    return (
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}>
        <View>
          <Text style={styles.label}>{label && label}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={!showPassword}
            value={value}
            onChange={onChange}
          />

          <Icon
            name={showPassword ? 'eye' : 'eye-off'}
            size={24}
            color="#80A1CF"
            onPress={toggleShowPassword}
          />
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}>
      <View>
        <Text style={styles.label}>{label && label}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChange={onChange}
        />
      </View>
    </View>
  );
}
