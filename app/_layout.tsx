import React, { useEffect } from 'react'
import { Slot, Stack, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import GlobalProvider  from '../context/GlobalProvider'

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
        'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
        'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    })
    useEffect(() => {
        if (error) {
            throw new Error(error.message)
        }
        if (fontsLoaded) {
            SplashScreen.hideAsync()
        }
    }, [fontsLoaded, error])

    if (!fontsLoaded && !error) {
        return null;
    }
    return (
        <GestureHandlerRootView>
            <GlobalProvider>
                <Stack>
                    <Stack.Screen name="index" options={{ headerShown: false }} />
                    <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    {/* <Stack.Screen name="/search/[query]" options={{ headerShown: false }} /> */}
                </Stack>
            </GlobalProvider>
        </GestureHandlerRootView>
    )
}
export default RootLayout