// 23521720 - Nguyen Minh Tuan

import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PrimaryButton from '../components/PrimaryButton';
import { useAuth } from '../context/AuthContext';

export default function ProfileScreen() {
  const { logout } = useAuth();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>NT</Text>
        </View>
        <Text style={styles.title}>Profile Screen</Text>
        <Text style={styles.name}>Nguyen Minh Tuan</Text>
        <Text style={styles.studentId}>MSSV: 23521720</Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton title="LOG OUT" onPress={logout} />
        </View>
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
  avatar: {
    alignItems: 'center',
    backgroundColor: '#2563eb',
    borderRadius: 44,
    height: 88,
    justifyContent: 'center',
    marginBottom: 18,
    width: 88,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '900',
  },
  title: {
    color: '#17233b',
    fontSize: 26,
    fontWeight: '900',
  },
  name: {
    color: '#334155',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 10,
  },
  studentId: {
    color: '#718096',
    fontSize: 14,
    marginTop: 4,
  },
  buttonContainer: {
    marginTop: 24,
    width: 180,
  },
});
