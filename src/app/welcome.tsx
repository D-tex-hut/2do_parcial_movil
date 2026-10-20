import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BrandLogo from '@/components/welcome/BrandLogo';
import PrimaryButton from '@/components/welcome/PrimaryButton';


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
    justifyContent: 'space-between',
  },
  bottom: {
    gap: 32,
  },
});