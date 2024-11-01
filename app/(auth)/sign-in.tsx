import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../utils'
import { images } from '../../constants'
import FormField from '@/components/formField'
import CustomButton from '@/components/customButton'
import { Link, router } from 'expo-router'
import {signIn} from '@/lib/appwrite'

const SignIn = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = async () => {
        if (!form.email || !form.password)
          Alert.alert('Error', 'Please fill all fields')
    
        setIsSubmitting(true)
        try {
          const result = await signIn(form.email, form.password)
          router.replace('/home')
    
        } catch (error: any) {
          Alert.alert('Error', error.message)
        } finally {
          setIsSubmitting(false)
        }
      }
    return (
        <SafeAreaView style={{
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
                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({
                            ...form,
                            email: e
                        })}
                        otherStyles={{
                            marginTop: 28
                        }}
                        keyboardType="email.address"
                    />
                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({
                            ...form,
                            password: e
                        })}
                        otherStyles={{
                            marginTop: 28
                        }}
                    />
                    <CustomButton
                        title='Sign in'
                        handlePress={submit}
                        containerStyles={{
                            marginTop: 28
                        }}
                        isLoading={isSubmitting}
                    />
                    <View
                        style={{
                            justifyContent: 'center',
                            paddingTop: 20,
                            flexDirection: "row",
                            gap: 8
                        }}
                    >
                        <Text style={{
                            fontSize: 18,
                            color: colors.gray[100],
                            fontFamily: "Poppins-Regular"
                        }}>
                            Don't have an account?
                            
                        </Text>
                        <Link href="/sign-up"
                                style={{
                                    color: colors.secondary[200],
                                    fontSize: 18,
                                    fontFamily: "Poppins-SemiBold"
                                
                                }}
                            >
                                Sign Up
                            </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn

const styles = StyleSheet.create({})