// 23521720 - Nguyen Minh Tuan

import { StyleSheet, Text, View } from 'react-native';

export default function AppHeader({ isDarkMode }) {
  return (
    <View style={styles.container}>
      <View style={[styles.logo, isDarkMode && styles.darkLogo]}>
        <Text style={styles.logoMark}>⚛</Text>
      </View>
      <Text style={[styles.title, isDarkMode && styles.lightText]}>React Native App</Text>
      <Text style={[styles.subtitle, isDarkMode && styles.darkSubtitle]}>
        Settings & Feedback
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 24,
    paddingTop: 24,
  },
  logo: {
    alignItems: 'center',
    backgroundColor: '#10233f',
    borderRadius: 42,
    height: 84,
    justifyContent: 'center',
    marginBottom: 12,
    width: 84,
  },
  darkLogo: {
    backgroundColor: '#22304a',
  },
  logoMark: {
    color: '#61dafb',
    fontSize: 50,
  },
  title: {
    color: '#14213d',
    fontSize: 24,
    fontWeight: '800',
  },
  lightText: {
    color: '#f8fafc',
  },
  subtitle: {
    color: '#66748a',
    fontSize: 14,
    marginTop: 4,
  },
  darkSubtitle: {
    color: '#a9b7cc',
  },
});
