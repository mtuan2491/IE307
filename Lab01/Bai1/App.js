// 23521720 - Nguyen Minh Tuan
import { useState } from 'react';
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar as NativeStatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import PostCard from './src/components/PostCard';
import initialPosts from './src/data/posts';

export default function App() {
  const [posts, setPosts] = useState(initialPosts);

  const updatePost = (postId, updatePostData) => {
    setPosts((currentPosts) =>
      currentPosts.map((post) => (post.id === postId ? updatePostData(post) : post)),
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
    updatePost(postId, (post) => ({
      ...post,
      comments: post.comments + 1,
    }));
  };

  const handleShare = (postId) => {
    updatePost(postId, (post) => ({
      ...post,
      shares: post.shares + 1,
    }));
  };

  const renderPost = ({ item }) => (
    <PostCard
      post={item}
      onLike={() => handleLike(item.id)}
      onComment={() => handleComment(item.id)}
      onShare={() => handleShare(item.id)}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Social Media Feed</Text>
        <Text style={styles.headerSubtitle}>Connect, share, and enjoy</Text>
      </View>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.feedContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eef2f8',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? NativeStatusBar.currentHeight + 13 : 13,
    paddingBottom: 15,
    backgroundColor: '#1264d7',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '800',
  },
  headerSubtitle: {
    marginTop: 3,
    color: '#dce9ff',
    fontSize: 13,
  },
  feedContent: {
    padding: 12,
    paddingBottom: 28,
  },
});
