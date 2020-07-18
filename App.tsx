import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import * as Updates from 'expo-updates';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  useEffect(() => {
    const updateApp = async () => {
      const { isAvailable } = await Updates.checkForUpdateAsync();

      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    };

    updateApp();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Updates over-the-air</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
