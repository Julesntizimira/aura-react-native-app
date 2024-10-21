import { StyleSheet, Text, View, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'
import colors from '../utils'

const TabsLayout = () => {

    interface TabIconProps {
        icon: any;
        color: string;
        name: string;
        focused: boolean;
    }

    const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
        return (
            <View style={
                styles.container
            }>
                <Image
                    source={icon}
                    resizeMode='contain'
                    tintColor={color}
                    style={{
                        width: 24,
                        height: 24,
                    }}
                />
                <Text style={focused ? {...styles.textFocused, color: color} : {...styles.text, color: color}}>{name}</Text>
            </View>
        )
    }
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFA001',
                tabBarInactiveTintColor: '#CDCDE0',
                tabBarStyle: {
                    backgroundColor: colors.primary,
                    borderTopWidth: 1,
                    borderTopColor: colors.black[200],
                    height: 84,
                }
            }}
        >

            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.home}
                            color={color}
                            focused={focused}
                            name="Home"
                        />
                    )

                }}
            />
            <Tabs.Screen
                name="bookmark"
                options={{
                    title: "Bookmark",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.bookmark}
                            color={color}
                            focused={focused}
                            name="Bookmark"
                        />
                    )

                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    title: "Create",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.plus}
                            color={color}
                            focused={focused}
                            name="Create"
                        />
                    )

                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.profile}
                            color={color}
                            focused={focused}
                            name="Profile"
                        />
                    )

                }}
            />
        </Tabs>
    )
}

export default TabsLayout

const styles = StyleSheet.create({
    textFocused: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 12,
    },
    text: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    }

})