// 23521720 - Nguyen Minh Tuan

import { StyleSheet, Text, View } from 'react-native';

import FeedbackItem from './FeedbackItem';

export default function FeedbackList({ feedbacks, isDarkMode }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, isDarkMode && styles.lightText]}>Frequently Asked Questions</Text>
      {feedbacks.length === 0 ? (
        <View style={[styles.emptyState, isDarkMode && styles.darkEmptyState]}>
          <Text style={styles.emptyIcon}>✦</Text>
          <Text style={[styles.emptyText, isDarkMode && styles.darkEmptyText]}>
            Submitted feedback will appear here.
          </Text>
        </View>
      ) : (
        feedbacks.map((feedback) => (
          <FeedbackItem key={feedback.id} feedback={feedback} isDarkMode={isDarkMode} />
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  title: {
    color: '#14213d',
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 12,
  },
  lightText: {
    color: '#f8fafc',
  },
  emptyState: {
    alignItems: 'center',
    backgroundColor: '#eaf1fb',
    borderRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  darkEmptyState: {
    backgroundColor: '#182235',
  },
  emptyIcon: {
    color: '#2563eb',
    fontSize: 24,
    marginBottom: 6,
  },
  emptyText: {
    color: '#66748a',
    fontSize: 14,
    textAlign: 'center',
  },
  darkEmptyText: {
    color: '#a9b7cc',
  },
});
