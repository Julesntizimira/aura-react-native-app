import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../utils'
import { images } from '../../constants'
import FormField from '@/components/formField'
import CustomButton from '@/components/customButton'
import { Link, router } from 'expo-router'
import { createUser } from '@/lib/appwrite'



const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if (!form.username || !form.email || !form.password)
      Alert.alert('Error', 'Please fill all fields')

    setIsSubmitting(true)
    try {
      const result = await createUser(form.email, form.password, form.username)
      router.push('/home')

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
            Sign Up to Aora
          </Text>



          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({
              ...form,
              username: e
            })}
            otherStyles={{
              marginTop: 10
            }}
          />
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
            title='Sign up'
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
              Have an account Already?

            </Text>
            <Link href="/sign-in"
              style={{
                color: colors.secondary[200],
                fontSize: 18,
                fontFamily: "Poppins-SemiBold"
              }}
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})