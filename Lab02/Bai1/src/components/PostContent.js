// 23521720 - Nguyen Minh Tuan
import { Image, StyleSheet, Text, View } from 'react-native';

export default function PostContent({ content, image }) {
  return (
    <>
      <Text style={styles.content}>{content}</Text>
      <View style={styles.postImageFrame}>
        <Image source={{ uri: image }} style={styles.postImage} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: '#30394c',
    fontSize: 15,
    lineHeight: 21,
  },
  postImageFrame: {
    marginHorizontal: 14,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#dfe7f3',
  },
  postImage: {
    width: '100%',
    height: 230,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
