// 23521720 - Nguyen Minh Tuan

import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AuthHeader from '../components/AuthHeader';
import AuthInput from '../components/AuthInput';
import PrimaryButton from '../components/PrimaryButton';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = () => {
    if (!login(email, password)) {
      Alert.alert('Login failed', 'Incorrect email or password.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.form}>
            <AuthHeader title="Welcome" subtitle="Sign in to continue to your app" />
            <AuthInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="✉"
              keyboardType="email-address"
              onChangeText={setEmail}
              placeholder="Email"
              value={email}
            />
            <AuthInput
              icon="⌑"
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry
              value={password}
            />
            <PrimaryButton title="LOG IN" onPress={handleLogin} />
            <View style={styles.linkRow}>
              <Text style={styles.linkPrefix}>New here? </Text>
              <Pressable onPress={() => navigation.navigate('Register')}>
                <Text style={styles.link}>Sign up here!</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f7f9fc',
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
  form: {
    alignSelf: 'center',
    maxWidth: 520,
    width: '100%',
  },
  linkRow: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 24,
  },
  linkPrefix: {
    color: '#64748b',
    fontSize: 14,
  },
  link: {
    color: '#2563eb',
    fontSize: 14,
    fontWeight: '800',
  },
});
