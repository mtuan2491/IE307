// 23521720 - Nguyen Minh Tuan
import { StyleSheet, View } from 'react-native';

import ActionButton from './ActionButton';

const actionIcons = {
  like: require('../../assets/icons/like.png'),
  liked: require('../../assets/icons/like-filled.png'),
  comment: require('../../assets/icons/comment.png'),
  share: require('../../assets/icons/share.png'),
};

export default function PostActions({ liked, onLike, onComment, onShare }) {
  return (
    <View style={styles.actionsRow}>
      <ActionButton
        icon={liked ? actionIcons.liked : actionIcons.like}
        label={liked ? 'Liked' : 'Likes'}
        active={liked}
        accessibilityLabel={liked ? 'Unlike post' : 'Like post'}
        onPress={onLike}
      />
      <ActionButton icon={actionIcons.comment} label="Comments" accessibilityLabel="Add a comment" onPress={onComment} />
      <ActionButton icon={actionIcons.share} label="Shares" accessibilityLabel="Share post" onPress={onShare} />
    </View>
  );
}

const styles = StyleSheet.create({
  actionsRow: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 7,
  },
});
