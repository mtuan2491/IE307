// 23521720 - Nguyen Minh Tuan

import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../context/AuthContext';
import AuthStack from './AuthStack';
import MainTabs from './MainTabs';

export default function RootNavigator() {
  const { isAuthenticated, isChecking } = useAuth();

  if (isChecking) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="#ea580c" size="large" />
        <Text style={styles.loadingText}>Checking session...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    flex: 1,
    justifyContent: 'center',
  },
  loadingText: {
    color: '#68768a',
    fontSize: 14,
    marginTop: 12,
  },
});
