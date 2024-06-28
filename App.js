
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AvatarProfile from './src/components/AvatarProfile';

export default function App() {
  return (
    <AvatarProfile />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 32,
  },
});
