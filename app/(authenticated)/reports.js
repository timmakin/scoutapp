import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box } from "native-base";
import { Link } from 'expo-router';

export default function Page() {
  return (
    <NativeBaseProvider>
      <StatusBar style="light" />
      <Box>Reports</Box>
      <Link href={'/'}><Box>Home</Box></Link>
    </NativeBaseProvider>
  );
}