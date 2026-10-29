// 23521720 - Nguyen Minh Tuan

import { Pressable, StyleSheet, Text } from 'react-native';

export default function PrimaryButton({ title, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#ea580c',
    borderRadius: 14,
    elevation: 2,
    justifyContent: 'center',
    minHeight: 54,
    shadowColor: '#9a3412',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 8,
  },
  buttonPressed: {
    backgroundColor: '#c2410c',
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
});
