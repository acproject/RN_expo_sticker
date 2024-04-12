import {Link, Stack, useNavigation } from 'expo-router';
import { Text, Image, View, Button } from 'react-native';
import { useEffect, useState }  from 'react';

function LogoTitle() {
    return (
        <Image 
            style={{ width: 50, height: 50 }}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
    );
}

export default function Home() {
    const navigation = useNavigation();

    const [count, setCount] = useState(0);

    useEffect(() => {
        navigation.setOptions({headerShown : false});
    }, [navigation])
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Stack.Screen
                options={{
                    title: 'My home',
                   
                    headerStyle: {backgroundColor: '#f4511e'},
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitle: props => <LogoTitle {...props} />,
                    headerRight: () => <Button onPress={() => setCount( c => c+1)} title='Update {count}' />,

                }}
            />
        
            <Text>Home Screen {count}</Text>
            <Link href={{ pathname: 'details', params: {name: 'Bacon'}}}>Go to Details</Link>
        </View>
    );
}