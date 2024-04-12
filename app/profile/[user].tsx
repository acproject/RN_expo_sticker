import { useSegments } from 'expo-router';


export default function Route() {
    const segments = useSegments<['profile'] | ['profilem', '[user]']>();

    return <></>
}