// 23521720 - Nguyen Minh Tuan
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FeedHeader() {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Social Media Feed</Text>
        <Text style={styles.subtitle}>Connect, share, and enjoy</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#1264d7',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 13,
    paddingBottom: 15,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '800',
  },
  subtitle: {
    marginTop: 3,
    color: '#dce9ff',
    fontSize: 13,
  },
});
