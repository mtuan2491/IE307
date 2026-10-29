// 23521720 - Nguyen Minh Tuan

import { StyleSheet, Text, View } from 'react-native';

export default function AuthHeader({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoMark}>⚛</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 26,
  },
  logo: {
    alignItems: 'center',
    backgroundColor: '#12223d',
    borderRadius: 42,
    height: 84,
    justifyContent: 'center',
    marginBottom: 14,
    width: 84,
  },
  logoMark: {
    color: '#61dafb',
    fontSize: 49,
  },
  title: {
    color: '#17233b',
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
  },
  subtitle: {
    color: '#6b788d',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 6,
    textAlign: 'center',
  },
});
