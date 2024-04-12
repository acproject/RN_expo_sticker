
import { Stack, Tabs } from 'expo-router';

export default function Layout() {
    return( <>
    <Stack
        screenOptions={{
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
        <Stack.Screen name='user' getId={({ params }) => String(Date.now())} />
        <Stack.Screen name='home' options={{}} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
   
        </>
    );
}