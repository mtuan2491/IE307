// 23521720 - Nguyen Minh Tuan

import { StyleSheet, Text, View } from 'react-native';

export default function FeedbackItem({ feedback, isDarkMode }) {
  return (
    <View style={[styles.card, isDarkMode && styles.darkCard]}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Q</Text>
      </View>
      <Text style={[styles.content, isDarkMode && styles.lightText]}>{feedback.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    borderColor: '#e1e7f0',
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 10,
    padding: 14,
  },
  darkCard: {
    backgroundColor: '#182235',
    borderColor: '#2b3b55',
  },
  badge: {
    alignItems: 'center',
    backgroundColor: '#dbeafe',
    borderRadius: 14,
    height: 28,
    justifyContent: 'center',
    marginRight: 10,
    width: 28,
  },
  badgeText: {
    color: '#1d4ed8',
    fontSize: 13,
    fontWeight: '900',
  },
  content: {
    color: '#263651',
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
  },
  lightText: {
    color: '#f8fafc',
  },
});
