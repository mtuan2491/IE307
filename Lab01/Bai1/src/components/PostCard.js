// 23521720 - Nguyen Minh Tuan
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const actionIcons = {
  like: require('../../assets/icons/like.png'),
  liked: require('../../assets/icons/like-filled.png'),
  comment: require('../../assets/icons/comment.png'),
  share: require('../../assets/icons/share.png'),
};

export default function PostCard({ post, onLike, onComment, onShare }) {
  return (
    <View style={styles.card}>
      <View style={styles.authorRow}>
        <Image source={{ uri: post.avatar }} style={styles.avatar} />
        <View style={styles.authorText}>
          <Text style={styles.username}>{post.username}</Text>
          <Text style={styles.postTime}>Just now</Text>
        </View>
      </View>

      <Text style={styles.content}>{post.content}</Text>
      <View style={styles.postImageFrame}>
        <Image source={{ uri: post.image }} style={styles.postImage} />
      </View>

      <View style={styles.statisticsRow}>
        <Text style={styles.statisticsText}>{post.likes} Likes</Text>
        <Text style={styles.statisticsText}>{post.comments} Comments</Text>
        <Text style={styles.statisticsText}>{post.shares} Shares</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.actionsRow}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={post.liked ? 'Unlike post' : 'Like post'}
          accessibilityState={{ selected: post.liked }}
          onPress={onLike}
          style={({ pressed }) => [
            styles.actionButton,
            post.liked && styles.activeActionButton,
            pressed && styles.pressedActionButton,
          ]}
        >
          <Image
            source={post.liked ? actionIcons.liked : actionIcons.like}
            accessible={false}
            style={[styles.actionIcon, post.liked && styles.activeActionIcon]}
          />
          <Text style={[styles.actionText, post.liked && styles.activeActionText]}>
            {post.liked ? 'Liked' : 'Likes'}
          </Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Add a comment"
          onPress={onComment}
          style={({ pressed }) => [styles.actionButton, pressed && styles.pressedActionButton]}
        >
          <Image source={actionIcons.comment} accessible={false} style={styles.actionIcon} />
          <Text style={styles.actionText}>Comments</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Share post"
          onPress={onShare}
          style={({ pressed }) => [styles.actionButton, pressed && styles.pressedActionButton]}
        >
          <Image source={actionIcons.share} accessible={false} style={styles.actionIcon} />
          <Text style={styles.actionText}>Shares</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 14,
    backgroundColor: '#ffffff',
    borderRadius: 14,
    shadowColor: '#14213d',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
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
  divider: {
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 14,
    backgroundColor: '#ccd3df',
  },
  actionsRow: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 7,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    marginHorizontal: 3,
    borderRadius: 8,
  },
  activeActionButton: {
    backgroundColor: '#e7f0ff',
  },
  pressedActionButton: {
    opacity: 0.62,
  },
  actionText: {
    color: '#4b5568',
    fontSize: 13,
    fontWeight: '700',
  },
  actionIcon: {
    width: 18,
    height: 18,
    marginRight: 5,
    tintColor: '#4b5568',
    resizeMode: 'contain',
  },
  activeActionIcon: {
    tintColor: '#1264d7',
  },
  activeActionText: {
    color: '#1264d7',
  },
});
