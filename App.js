import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
const demo = [{ id: 0, name: "A", image: 'https://images.unsplash.com/photo-1614160859544-177611d11f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80' },
{ id: 1, name: "B", image: 'https://images.unsplash.com/photo-1614160859544-177611d11f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80' },
{ id: 2, name: "C", image: 'https://images.unsplash.com/photo-1614160859544-177611d11f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80' },
{ id: 3, name: "D", image: 'https://images.unsplash.com/photo-1614160859544-177611d11f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80' },
{ id: 4, name: "E", image: 'https://images.unsplash.com/photo-1614160859544-177611d11f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80' },
{ id: 5, name: "F", image: 'https://images.unsplash.com/photo-1614160859544-177611d11f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80' },
{ id: 6, name: "H", image: 'https://images.unsplash.com/photo-1614160859544-177611d11f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80' },
{ id: 7, name: "I", image: 'https://images.unsplash.com/photo-1614160859544-177611d11f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80' },
{ id: 8, name: "J", image: 'https://images.unsplash.com/photo-1614160859544-177611d11f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80' },
{ id: 9, name: "A", image: 'https://images.unsplash.com/photo-1614160859544-177611d11f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80' },
{ id: 10, name: "AB", image: 'https://images.unsplash.com/photo-1614160859544-177611d11f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80' },
]
const paginationData = () => {
  alert('Reload Data')
}
const App = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.Header_Text}>FlatList Implementation</Text>
      <FlatList
        data={demo}
        contentContainerStyle={{ flexDirection: 'column' }}
        numColumns={2}
      
        onEndReached={() => paginationData()}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.cartBox} key={index}>
              <TouchableOpacity>
                <Image source={{ uri: item.image }} style={styles.image} resizeMode='contain' />
              </TouchableOpacity>
              <Text style={styles.Text_name}>{item.name}</Text>
            </View>
          )
        }}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  Header_Text:{
      color:'#000000',
      fontSize:23,
      alignSelf:'center'
  },
  cartBox: {
    width: 180,
    height: 202,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor:'#BB8D61',
    marginLeft: 12,
    marginTop: 10
  }, image: {
    width: 180,
    height: 140,
    marginVertical:10

  }, Text_name: {
    color: '#000000',
    fontSize: 20,
    alignSelf: 'center'
  }
})