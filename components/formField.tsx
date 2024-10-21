import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../app/utils'

const FormField = () => {
    return (
        <View style={{
            marginBottom: 8,
        }}>
            <Text style={{
                fontSize: 16,
                color: colors.gray[100],
                fontFamily: 'Poppins-medium',
            }}>FormField
            </Text>
        </View>
    )
}

export default FormField

const styles = StyleSheet.create({})