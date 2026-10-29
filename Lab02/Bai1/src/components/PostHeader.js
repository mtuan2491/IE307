// 23521720 - Nguyen Minh Tuan
import { Image, StyleSheet, Text, View } from 'react-native';

export default function PostHeader({ username, avatar }) {
  return (
    <View style={styles.authorRow}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.authorText}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.postTime}>Just now</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingTop: 14,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#dfe7f3',
  },
  authorText: {
    flex: 1,
    marginLeft: 11,
  },
  username: {
    color: '#172033',
    fontSize: 16,
    fontWeight: '700',
  },
  postTime: {
    marginTop: 2,
    color: '#778198',
    fontSize: 12,
  },
});
