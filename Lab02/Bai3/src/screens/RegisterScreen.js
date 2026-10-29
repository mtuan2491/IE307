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

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreate = () => {
    Alert.alert('Registration demo', 'Account creation is not implemented in this lab.');
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
            <AuthHeader title="Create New Account" subtitle="Registration UI for navigation practice" />
            <AuthInput
              autoCapitalize="words"
              icon="♙"
              onChangeText={setUsername}
              placeholder="Enter username"
              value={username}
            />
            <AuthInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="✉"
              keyboardType="email-address"
              onChangeText={setEmail}
              placeholder="Enter email"
              value={email}
            />
            <AuthInput
              icon="⌑"
              onChangeText={setPassword}
              placeholder="Enter password"
              secureTextEntry
              value={password}
            />
            <PrimaryButton title="CREATE" onPress={handleCreate} />
            <View style={styles.linkRow}>
              <Text style={styles.linkPrefix}>Already have an account? </Text>
              <Pressable onPress={() => navigation.goBack()}>
                <Text style={styles.link}>Login now!</Text>
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
