import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import colors from '../app/utils'
import { icons } from '../constants'



interface SearchInputProps {
    value?: string,
    placeholder?: string,
    handleChangeText?: (text: string) => void,
    otherStyles?: any,
    keyboardType?: string,
}
const SearchInput: React.FC<SearchInputProps> = ({ value, placeholder, handleChangeText, keyboardType, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (

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
            justifyContent: 'space-between',
            gap: 16
        }}>
            <TextInput
                style={styles.textInput}
                value={value}
                placeholder={placeholder}
                placeholderTextColor="#7b7b8b"
                onChangeText={handleChangeText}
            />
            <TouchableOpacity>
                <Image
                    source={icons.search}
                    style={{
                        width: 20,
                        height: 20,
                    }}
                    resizeMode='contain'
                />
            </TouchableOpacity>
        </View>

    )
}

export default SearchInput

const styles = StyleSheet.create({
    textInput: {
        display: "flex",
        color: "white",
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        width: '85%',
        marginTop: 2,
    }
})