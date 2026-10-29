// 23521720 - Nguyen Minh Tuan
import { StyleSheet, Text, View } from 'react-native';

export default function PostStats({ likes, comments, shares }) {
  return (
    <View style={styles.statisticsRow}>
      <Text style={styles.statisticsText}>{likes} Likes</Text>
      <Text style={styles.statisticsText}>{comments} Comments</Text>
      <Text style={styles.statisticsText}>{shares} Shares</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statisticsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 11,
  },
  statisticsText: {
    color: '#667085',
    fontSize: 12,
    fontWeight: '600',
  },
});
