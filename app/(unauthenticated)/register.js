import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box } from "native-base";
import { Link } from 'expo-router';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="light" />
      <Box>Register</Box>
      <Link href={'/'}><Box>Home</Box></Link>
    </NativeBaseProvider>
  );
}