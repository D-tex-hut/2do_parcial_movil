import { StyleSheet, Text } from 'react-native';

export default function BrandLogo() {
  return (
    <Text style={styles.logo}>
      Crypt<Text style={styles.accent}>X</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 56,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  accent: {
    color: '#6C4CF1',
  },
});
