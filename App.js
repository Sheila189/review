
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AvatarProfile from './src/components/AvatarProfile';
import FormLogin from './src/components/FormLogin';
import Feed from './src/components/Feed';
import Navegation from './src/components/Navegation';

export default function App() {
  return (
    <Navegation />
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
