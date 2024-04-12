import { Tabs } from 'expo-router/tabs';

import { FontAwesome } from '@expo/vector-icons';
export default function AppLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
        <Tabs.Screen
            name='index'
            options={{
                title: 'Home',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name='home' color={color} />,
                href: null,
            }} />
        <Tabs.Screen name='setting'
            options={{
                title: 'Settings',
                tabBarIcon: ({ color} ) => <FontAwesome size={28} name='cog' color={color} />,
            }}/>
    </Tabs>
    );
}