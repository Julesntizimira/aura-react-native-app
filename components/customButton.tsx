import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '@/app/utils'

interface CustomButtonProps {
    title: string;
    handlePress: () => void;
    containerStyles?: object;
    textStyles?: object;
    isLoading: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity
            style={{
                ...styles.container, 
                ...containerStyles,
                opacity: isLoading ? 0.5 : 1
            }}
            onPress={handlePress}
            activeOpacity={0.8}
            disabled={isLoading}
        >
            <Text style={[styles.text, textStyles]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary[200],
        minHeight: 62,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.primary,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        fontWeight: 'bold',
    }
})