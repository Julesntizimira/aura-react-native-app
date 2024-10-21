import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../utils'
import {images} from '../../constants'
import FormField from '@/components/formField'
const SignIn = () => {
    return (
        <SafeAreaView style= {{
            backgroundColor: colors.primary,
            height: '100%',
        }}>
            <ScrollView>
                <View style={{
                    height: '100%',
                    padding: 16,
                    margin: 24,
                    justifyContent: 'center',
                }}>
                    <Image
                        source={images.logo}
                        resizeMode='contain'
                        style={{
                            width: 115,
                            height: 35, 
                        }}
                    />
                    <Text style={{
                        color: 'white',
                        fontSize: 24,
                        fontWeight: 'semibold',
                        marginTop: 20,
                        fontFamily: 'Poppins-SemiBold',
                    }}>
                        Log in to Aora
                    </Text>
                    <FormField/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn

const styles = StyleSheet.create({})