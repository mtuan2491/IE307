// 23521720 - Nguyen Minh Tuan
import { Image, Pressable, StyleSheet, Text } from 'react-native';

export default function ActionButton({ icon, label, active = false, accessibilityLabel, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ selected: active }}
      onPress={onPress}
      style={({ pressed }) => [
        styles.actionButton,
        active && styles.activeActionButton,
        pressed && styles.pressedActionButton,
      ]}
    >
      <Image source={icon} accessible={false} style={[styles.actionIcon, active && styles.activeActionIcon]} />
      <Text style={[styles.actionText, active && styles.activeActionText]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
