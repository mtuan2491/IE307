// 23521720 - Nguyen Minh Tuan
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function SettingSwitch({ label, description, value, onValueChange, isDarkMode }) {
  return (
    <View style={styles.container}>
      <View style={styles.copy}>
        <Text style={[styles.label, isDarkMode && styles.lightText]}>{label}</Text>
        <Text style={[styles.description, isDarkMode && styles.darkDescription]}>{description}</Text>
      </View>
      <Switch
        accessibilityLabel={label}
        value={value}
        onValueChange={onValueChange}
        trackColor={switchTrackColors}
        thumbColor={value ? '#ffffff' : '#f1f5f9'}
      />
    </View>
  );
}

const switchTrackColors = {
  false: '#b8c2d1',
  true: '#14b8a6',
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 80,
  },
  copy: {
    flex: 1,
    paddingRight: 14,
  },
  label: {
    color: '#17243d',
    fontSize: 16,
    fontWeight: '700',
  },
  lightText: {
    color: '#f8fafc',
  },
  description: {
    color: '#718096',
    fontSize: 12,
    lineHeight: 17,
    marginTop: 3,
  },
  darkDescription: {
    color: '#a9b7cc',
  },
});
