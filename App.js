
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AvatarProfile from './src/components/AvatarProfile';
import FormLogin from './src/components/FormLogin';
import Feed from './src/components/Feed';

export default function App() {
  return (
    <Feed />
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
