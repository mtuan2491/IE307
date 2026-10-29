// 23521720 - Nguyen Minh Tuan

import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function FeedbackForm({ value, onChangeText, onSubmit, isDarkMode }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, isDarkMode && styles.lightText]}>Feedback</Text>
      <Text style={[styles.helper, isDarkMode && styles.darkHelper]}>
        Tell us what would make your experience better.
      </Text>
      <TextInput
        accessibilityLabel="Feedback"
        multiline
        numberOfLines={5}
        onChangeText={onChangeText}
        placeholder="Your feedback here..."
        placeholderTextColor={isDarkMode ? '#8fa0b8' : '#8995a8'}
        style={[styles.input, isDarkMode && styles.darkInput]}
        textAlignVertical="top"
        value={value}
      />
      <Pressable
        accessibilityRole="button"
        onPress={onSubmit}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      >
        <Text style={styles.buttonText}>Send Feedback</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 26,
  },
  title: {
    color: '#14213d',
    fontSize: 24,
    fontWeight: '800',
  },
  lightText: {
    color: '#f8fafc',
  },
  helper: {
    color: '#66748a',
    fontSize: 13,
    marginBottom: 12,
    marginTop: 4,
  },
  darkHelper: {
    color: '#a9b7cc',
  },
  input: {
    backgroundColor: '#ffffff',
    borderColor: '#cfd8e6',
    borderRadius: 14,
    borderWidth: 1,
    color: '#17243d',
    fontSize: 15,
    minHeight: 130,
    paddingHorizontal: 14,
    paddingVertical: 13,
  },
  darkInput: {
    backgroundColor: '#182235',
    borderColor: '#3a4a64',
    color: '#f8fafc',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2563eb',
    borderRadius: 12,
    elevation: 2,
    justifyContent: 'center',
    marginTop: 12,
    minHeight: 50,
    shadowColor: '#1d4ed8',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.22,
    shadowRadius: 7,
  },
  buttonPressed: {
    backgroundColor: '#1d4ed8',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.4,
  },
});
