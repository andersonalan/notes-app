import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const NotesScreen = () => {
  const [notes, setNotes] = useState([
    {id: '1', text: 'Anotação 1'},
    {id: '2', text: 'Anotação 2'},
    {id: '3', text: 'Anotação 3'},
  ]);
  return ( <View style={styles.container}>
    <FlatList
      data={notes}
      keyExtractor={(item) => item.id}
      renderItem={({item})=> (
        <View style={styles.noteItem}>
          <Text style={styles.noteText}>{item.text}</Text>
        </View>
      )}
    
    />
    <Text>Anotações</Text>
  </View>);
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    backgroudColor: '#fff',
  }
})

export default NotesScreen