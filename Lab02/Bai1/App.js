// 23521720 - Nguyen Minh Tuan
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import FeedHeader from './src/components/FeedHeader';
import PostCard from './src/components/PostCard';
import initialPosts from './src/data/posts';

export default function App() {
  const [posts, setPosts] = useState(initialPosts);

  const updatePost = (postId, update) => {
    setPosts((currentPosts) =>
      currentPosts.map((post) => (post.id === postId ? update(post) : post)),
    );
  };

  const handleLike = (postId) => {
    updatePost(postId, (post) => ({
      ...post,
      liked: !post.liked,
      likes: Math.max(0, post.likes + (post.liked ? -1 : 1)),
    }));
  };

  const handleComment = (postId) => {
    updatePost(postId, (post) => ({ ...post, comments: post.comments + 1 }));
  };

  const handleShare = (postId) => {
    updatePost(postId, (post) => ({ ...post, shares: post.shares + 1 }));
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <FeedHeader />
        <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.feedArea}>
          <FlatList
            data={posts}
            renderItem={({ item }) => (
              <PostCard
                post={item}
                onLike={() => handleLike(item.id)}
                onComment={() => handleComment(item.id)}
                onShare={() => handleShare(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.feedContent}
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f8',
  },
  feedArea: {
    flex: 1,
  },
  feedContent: {
    padding: 12,
    paddingBottom: 28,
  },
});
