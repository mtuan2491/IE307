// 23521720 - Nguyen Minh Tuan
import { useState } from 'react';
import {
  FlatList,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar as NativeStatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import SectionHeader from './src/components/SectionHeader';
import SelectableItem from './src/components/SelectableItem';
import { backgroundImages, fruitsVegetables, workouts } from './src/data/data';

export default function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelection = (itemName) => {
    setSelectedItems((currentItems) =>
      currentItems.includes(itemName)
        ? currentItems.filter((item) => item !== itemName)
        : [...currentItems, itemName],
    );
  };

  const renderWorkout = ({ item }) => (
    <SelectableItem
      label={item.type}
      selected={selectedItems.includes(item.type)}
      onPress={() => toggleSelection(item.type)}
    />
  );

  const renderProduce = ({ item }) => (
    <SelectableItem
      label={item}
      selected={selectedItems.includes(item)}
      onPress={() => toggleSelection(item)}
    />
  );

  const renderSectionHeader = ({ section }) => (
    <SectionHeader title={section.title} imageUrl={section.url} />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.appHeader}>
        <Text style={styles.appTitle}>Healthy Choices</Text>
        <Text style={styles.appSubtitle}>Build your workout and food list</Text>
      </View>

      <View style={styles.listsArea}>
        <View style={styles.listPanel}>
          <Text style={styles.listTitle}>FlatList - Workouts</Text>
          <ImageBackground
            source={{ uri: backgroundImages.workouts }}
            style={styles.background}
            imageStyle={styles.backgroundImage}
          >
            <FlatList
              data={workouts}
              extraData={selectedItems}
              renderItem={renderWorkout}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.listContent}
              showsVerticalScrollIndicator={false}
            />
          </ImageBackground>
        </View>

        <View style={styles.listPanel}>
          <Text style={styles.listTitle}>SectionList - Fruits & Vegetables</Text>
          <ImageBackground
            source={{ uri: backgroundImages.produce }}
            style={styles.background}
            imageStyle={styles.backgroundImage}
          >
            <SectionList
              sections={fruitsVegetables}
              extraData={selectedItems}
              renderItem={renderProduce}
              renderSectionHeader={renderSectionHeader}
              keyExtractor={(item, index) => `${item}-${index}`}
              contentContainerStyle={styles.listContent}
              stickySectionHeadersEnabled={false}
              showsVerticalScrollIndicator={false}
            />
          </ImageBackground>
        </View>
      </View>

      <View style={styles.selectedPanel}>
        <Text style={styles.selectedTitle}>SELECTED ITEMS:</Text>
        <ScrollView style={styles.selectedScroll} showsVerticalScrollIndicator={false}>
          <Text style={styles.selectedText}>
            {selectedItems.length > 0 ? selectedItems.join(', ') : 'None'}
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#edf2f7',
  },
  appHeader: {
    paddingHorizontal: 18,
    paddingTop: Platform.OS === 'android' ? NativeStatusBar.currentHeight + 11 : 11,
    paddingBottom: 12,
    backgroundColor: '#173f6b',
  },
  appTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '800',
  },
  appSubtitle: {
    marginTop: 2,
    color: '#cfe3f7',
    fontSize: 12,
  },
  listsArea: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 8,
  },
  listPanel: {
    flex: 1,
    minHeight: 0,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#cbd7e6',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  listTitle: {
    paddingHorizontal: 13,
    paddingVertical: 9,
    color: '#173f6b',
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
    backgroundColor: '#ffffff',
  },
  background: {
    flex: 1,
    backgroundColor: '#dfe8f2',
  },
  backgroundImage: {
    opacity: 0.36,
  },
  listContent: {
    paddingVertical: 5,
  },
  selectedPanel: {
    maxHeight: 112,
    marginHorizontal: 10,
    marginBottom: 10,
    paddingHorizontal: 13,
    paddingTop: 10,
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: '#f0bd5b',
    borderRadius: 12,
    backgroundColor: '#fff7e6',
  },
  selectedTitle: {
    color: '#a65508',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 0.4,
  },
  selectedScroll: {
    marginTop: 4,
  },
  selectedText: {
    color: '#4f3b22',
    fontSize: 13,
    lineHeight: 18,
  },
});
