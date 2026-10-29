// 23521720 - Nguyen Minh Tuan
import { StyleSheet, View } from 'react-native';

import PostActions from './PostActions';
import PostContent from './PostContent';
import PostHeader from './PostHeader';
import PostStats from './PostStats';

export default function PostCard({ post, onLike, onComment, onShare }) {
  return (
    <View style={styles.card}>
      <PostHeader username={post.username} avatar={post.avatar} />
      <PostContent content={post.content} image={post.image} />
      <PostStats likes={post.likes} comments={post.comments} shares={post.shares} />
      <View style={styles.divider} />
      <PostActions liked={post.liked} onLike={onLike} onComment={onComment} onShare={onShare} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 14,
    backgroundColor: '#ffffff',
    borderRadius: 14,
    shadowColor: '#14213d',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 14,
    backgroundColor: '#ccd3df',
  },
});
