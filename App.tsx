import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://76acf5bf01e151edd298356ba437c9cf@o392911.ingest.us.sentry.io/4507161057624064',
});


function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="light" />
      <Box>Hello world</Box>
    </NativeBaseProvider>
  );
}

export default Sentry.wrap(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
