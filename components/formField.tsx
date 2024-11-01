import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import colors from '../app/utils'
import {icons} from '../constants'



interface FormFieldProps {
    title: string,
    value: string,
    placeholder?: string,
    handleChangeText: (text: string) => void,
    otherStyles: any,
    keyboardType?: string,
}
const FormField: React.FC<FormFieldProps> = ({ title, value, placeholder, handleChangeText, keyboardType, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View style={{
            marginBottom: 8,
            ...otherStyles
        }}>
            <Text style={{
                fontSize: 16,
                color: colors.gray[100],
                fontFamily: 'Poppins-medium',
            }}>
                {title}
            </Text>
            <View style={{
                width: '100%',
                height: 64,
                borderWidth: 2,
                borderColor: colors.black[200],
                borderStyle: 'solid',
                borderRadius: 24,
                padding: 16,
                backgroundColor: colors.black[100],
                // onFocus: {borderColor: colors.secondary[200]},
                alignItems: 'center',
                flexDirection: "row",
                gap: 16
            }}>
                <TextInput
                    style={styles.textInput}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                />
                {title === 'Password' && (
                    <TouchableOpacity
                        onPress={() => {
                            setShowPassword(!showPassword)
                        }}
                    >
                        <Image 
                            source={!showPassword ? icons.eye : icons.eyeHide}
                            resizeMode='contain'
                            style={{
                                width: 24,
                                height: 24
                            }}
                        />

                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField

const styles = StyleSheet.create({
    textInput: {
        display: "flex",
        color: "white",
        fontFamily: "Poppins-SemiBold",
        fontSize: 16,
        width: '90%'
    }
})