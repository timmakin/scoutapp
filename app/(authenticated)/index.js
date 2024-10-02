import { StatusBar } from 'expo-status-bar';
import { Box, Button, Container, Center } from "native-base";
import { Link, router } from 'expo-router';

export default function Page() {
  return (<>
        
            <StatusBar style="light" />
            <Box>Write report</Box>
            <Link href={'/reports'}><Box>Reports</Box></Link>
            <Button onPress={() => router.navigate('/reports')}>Reports</Button>
            </>
  );
}