// 23521720 - Nguyen Minh Tuan
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function SelectableItem({ label, selected, onPress }) {
  return (
    <View style={[styles.item, selected && styles.selectedItem]}>
      <Text style={[styles.label, selected && styles.selectedLabel]}>{label}</Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${selected ? 'Deselect' : 'Select'} ${label}`}
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          selected && styles.deselectButton,
          pressed && styles.pressedButton,
        ]}
      >
        <Text style={styles.buttonText}>{selected ? 'DESELECT' : 'SELECT'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 48,
    marginHorizontal: 10,
    marginVertical: 4,
    paddingLeft: 13,
    paddingRight: 7,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#d8e0ec',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.93)',
  },
  selectedItem: {
    borderColor: '#16886f',
    backgroundColor: 'rgba(226, 250, 243, 0.96)',
  },
  label: {
    flex: 1,
    marginRight: 8,
    color: '#243047',
    fontSize: 14,
    fontWeight: '600',
  },
  selectedLabel: {
    color: '#0c604f',
  },
  button: {
    minWidth: 82,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#1769d2',
  },
  deselectButton: {
    backgroundColor: '#d94a4a',
  },
  pressedButton: {
    opacity: 0.68,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
});
