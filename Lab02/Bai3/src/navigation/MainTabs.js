// 23521720 - Nguyen Minh Tuan

import { useMemo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CategoriesScreen from '../screens/CategoriesScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const tabIcons = {
  Home: '⌂',
  Categories: '▦',
  Favourites: '♥',
  Profile: '●',
};

export default function MainTabs() {
  const { bottom } = useSafeAreaInsets();
  const tabBarStyles = useMemo(() => createTabBarStyles(bottom), [bottom]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#718096',
        tabBarBadge: route.name === 'Favourites' ? 3 : undefined,
        tabBarBadgeStyle: styles.badge,
        tabBarLabelStyle: styles.label,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: tabBarStyles.tabBar,
        tabBarIcon: ({ focused }) => (
          <Text style={[styles.icon, focused ? styles.activeIcon : styles.inactiveIcon]}>{tabIcons[route.name]}</Text>
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function createTabBarStyles(bottomInset) {
  return StyleSheet.create({
    tabBar: {
      backgroundColor: '#ffffff',
      borderTopColor: '#e2e8f0',
      // Reserve the system navigation area and keep room for both icon and label.
      height: 64 + bottomInset,
      paddingTop: 7,
      paddingBottom: bottomInset + 8,
    },
  });
}

const styles = StyleSheet.create({
  label: {
    fontSize: 11,
    fontWeight: '700',
  },
  icon: {
    fontSize: 24,
    fontWeight: '800',
  },
  badge: {
    backgroundColor: '#ef4444',
    color: '#ffffff',
    fontSize: 11,
  },
  activeIcon: {
    color: '#2563eb',
  },
  inactiveIcon: {
    color: '#718096',
  },
});
