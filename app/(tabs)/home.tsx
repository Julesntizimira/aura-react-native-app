import { StyleSheet, Text, View, SafeAreaView, FlatList, Image } from 'react-native'
import React from 'react'
import colors from '../utils'
import { images } from '@/constants'
import SearchInput from '@/components/searchInput'


const Home = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.primary,
      }}
    >
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (

          <Text>{item.id} </Text>

        )}
        ListHeaderComponent={() => (
          <View
            style={{
              padding: 16,
              margin: 20,
              gap: 20,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 20,
              }}

            >
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-medium',
                    color: colors.gray[100]
                  }}
                >Welcome Back</Text>
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: 'Poppins-SemiBold',
                    color: 'white'
                  }}
                >JSMastery</Text>
              </View>
              <View
                style={{
                  marginTop: 6,
                }}>
                <Image
                  source={images.logoSmall}
                  resizeMode='contain'
                  style={{
                    width: 36,
                    height: 40,
                  }}
                />

              </View>

            </View>
            <SearchInput
            placeholder='Search for videos topic'
            />
            <View
              style={{
               width: '100%',
               paddingTop: 20,
               paddingBottom: 32,
              }}>
                <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Poppins-Regular',
                  color: colors.gray[100],
                  marginBottom: 12
                }}>Latest videos</Text>

            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})