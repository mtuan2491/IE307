// 23521720 - Nguyen Minh Tuan

import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function AuthInput({ icon, ...inputProps }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>
      <TextInput
        placeholderTextColor="#8995a8"
        style={styles.input}
        {...inputProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#cbd5e1',
    borderRadius: 15,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 14,
    minHeight: 58,
    paddingHorizontal: 16,
  },
  icon: {
    color: '#324158',
    fontSize: 21,
    marginRight: 12,
    textAlign: 'center',
    width: 25,
  },
  input: {
    color: '#17233b',
    flex: 1,
    fontSize: 15,
    minHeight: 56,
  },
});
