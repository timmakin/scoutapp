import { Stack } from 'expo-router/stack';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from "native-base";
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://76acf5bf01e151edd298356ba437c9cf@o392911.ingest.us.sentry.io/4507161057624064',
});


function App() {
  return (
    <>
     <NativeBaseProvider>
      <Stack>
          <Stack.Screen name="(authenticated)" options={{ headerShown: false }} />
        </Stack>
     </NativeBaseProvider>
    </>
  );
}

export default Sentry.wrap(App);