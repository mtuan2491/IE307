// 23521720 - Nguyen Minh Tuan

import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CenteredScreen({ icon, title, description }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.iconCircle}>
          <Text style={styles.icon}>{icon}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f7f9fc',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  iconCircle: {
    alignItems: 'center',
    backgroundColor: '#dbeafe',
    borderRadius: 38,
    height: 76,
    justifyContent: 'center',
    marginBottom: 18,
    width: 76,
  },
  icon: {
    color: '#2563eb',
    fontSize: 34,
  },
  title: {
    color: '#17233b',
    fontSize: 26,
    fontWeight: '900',
    textAlign: 'center',
  },
  description: {
    color: '#6c7a90',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
    textAlign: 'center',
  },
});
