import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from './utils'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { images } from '../constants'
import CustomButton from '@/components/customButton'


const App = () => {
    return (

        <SafeAreaView style={{
            backgroundColor: colors.primary,
            height: '100%',
        }}>
            <ScrollView
                contentContainerStyle={{
                    height: '100%',
                }}
            >
                <View style={styles.container}>
                    <Image
                        source={images.logo}
                        style={{
                            width: 130,
                            height: 84,
                        }}
                        resizeMode='contain'

                    />
                    <Image
                        source={images.cards}
                        style={{
                            maxWidth: 380,
                            width: '100%',
                            maxHeight: 300,
                            height: '100%',
                        }}
                        resizeMode='contain'
                    />
                    <View style={{
                        position: 'relative',
                        marginTop: 20,
                    }}>
                        <Text style={{
                            fontSize: 30,
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}>
                            Discover endless Possibilities with {' '}
                            <Text
                                style={{
                                    color: colors.secondary[200],
                                }}
                            >
                                Aora
                            </Text>
                        </Text>
                        <Image
                            source={images.path}
                            style={{
                                position: 'absolute',
                                width: 136,
                                height: 15,
                                bottom: -8,
                                right: -32,
                            }}
                            resizeMode='contain'
                        />

                    </View>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'Poppins-regular',
                        color: colors.gray[100],
                        marginTop: 28,
                        textAlign: 'center',
                    }}>
                        Where creativity meets innovation:
                        embark on journey of endless possibilities with Aora.
                    </Text>
                    <CustomButton
                        title="Continue with Email"
                        handlePress={() => {
                            router.push('/sign-in')
                        }}
                        containerStyles={{
                            width: '100%',
                            marginTop: 28,
                        }}
                        isLoading={false}
                    />
                </View>
            </ScrollView>
            <StatusBar backgroundColor={colors.primary} style='light' />
        </SafeAreaView>

    )
}

export default App

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        padding: 32,
    },
    text: {
        fontFamily: 'Poppins-black',
        fontSize: 24,
    }
})