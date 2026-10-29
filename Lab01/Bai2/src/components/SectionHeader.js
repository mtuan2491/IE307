// 23521720 - Nguyen Minh Tuan
import { Image, StyleSheet, Text, View } from 'react-native';

export default function SectionHeader({ title, imageUrl }) {
  return (
    <View style={styles.header}>
      <Image source={{ uri: imageUrl }} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 7,
    marginBottom: 3,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: 'rgba(24, 50, 84, 0.92)',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
  },
});
