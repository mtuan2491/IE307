// 23521720 - Nguyen Minh Tuan

import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import AppHeader from './src/components/AppHeader';
import FeedbackForm from './src/components/FeedbackForm';
import FeedbackList from './src/components/FeedbackList';
import SettingSwitch from './src/components/SettingSwitch';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);

  const handleSubmit = () => {
    const trimmedFeedback = feedbackText.trim();
    if (!trimmedFeedback) return;

    const newFeedback = {
      id: `${Date.now()}-${feedbacks.length}`,
      content: trimmedFeedback,
    };

    setFeedbacks((currentFeedbacks) => [newFeedback, ...currentFeedbacks]);
    setFeedbackText('');

    if (notificationsEnabled) {
      Alert.alert('Thank you!', 'Your feedback has been submitted.');
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.safeArea, isDarkMode && styles.darkBackground]}>
        <ExpoStatusBar style={isDarkMode ? 'light' : 'dark'} />
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <AppHeader isDarkMode={isDarkMode} />
          <View style={[styles.card, isDarkMode && styles.darkCard]}>
            <SettingSwitch
              label="Dark Mode"
              description="Use a comfortable dark colour theme"
              value={isDarkMode}
              onValueChange={setIsDarkMode}
              isDarkMode={isDarkMode}
            />
            <View style={[styles.divider, isDarkMode && styles.darkDivider]} />
            <SettingSwitch
              label="Notifications"
              description="Show a confirmation after sending feedback"
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              isDarkMode={isDarkMode}
            />
          </View>
          <FeedbackForm
            value={feedbackText}
            onChangeText={setFeedbackText}
            onSubmit={handleSubmit}
            isDarkMode={isDarkMode}
          />
          <FeedbackList feedbacks={feedbacks} isDarkMode={isDarkMode} />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f3f6fb',
  },
  darkBackground: {
    backgroundColor: '#0d1321',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 36,
    paddingHorizontal: 18,
  },
  card: {
    backgroundColor: '#ffffff',
    borderColor: '#e1e7f0',
    borderRadius: 18,
    borderWidth: 1,
    elevation: 2,
    marginBottom: 22,
    paddingHorizontal: 16,
    shadowColor: '#10233f',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
  },
  darkCard: {
    backgroundColor: '#182235',
    borderColor: '#2b3b55',
  },
  divider: {
    backgroundColor: '#e8edf4',
    height: 1,
  },
  darkDivider: {
    backgroundColor: '#31405a',
  },
});
