import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box } from "native-base";
import { Link, useLocalSearchParams } from 'expo-router';

export default function App() {

    const { id } = useLocalSearchParams();

  return (
    <NativeBaseProvider>
      <StatusBar style="light" />
      <Box>Report {id}</Box>
      <Link href={'/'}><Box>Home</Box></Link>
    </NativeBaseProvider>
  );
}