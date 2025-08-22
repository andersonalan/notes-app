import { useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const NotesScreen = () => {
  const [notes, setNotes] = useState([
    {id: '1', text: 'Anotação 1'},
    {id: '2', text: 'Anotação 2'},
    {id: '3', text: 'Anotação 3'},
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState('');

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
    <TouchableOpacity style={styles.addButton} onPress={ ()=> setModalVisible(true)}>
      <Text style={styles.addButtonText}>Adicionar Anotação</Text>

    </TouchableOpacity>
    <Modal
      visible={modalVisible}
      animationType='slide'
      transparent
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverLay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Nova anotação</Text>
          <TextInput
            style={styles.input}
            placeholder='Anote...'
            placeholderTextColor='#aaa'
            value={newNote}
            onChangeText={setNewNote}
          />
          <View style={styles.modalButtons}>

            <TouchableOpacity style={styles.cancelButton} onPress={()=> setModalVisible(false)}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>          

            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
         
          </View>
        </View>
      </View>
    </Modal>
  </View>);
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    backgroudColor: '#fff',
  },
  noteItem:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#9b9898ff',
    padding: 15,
    borderRadius:5,
    marginVertical: 5,
  },
  noteText:{
    fontSize: 18, 
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOverlay:{
    flex: 1,
    backgroudColor: 'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center'
  },
  modalContent:{
    backgroundColor:'#fff',
    padding: 20,
    borderRadius: 10,
    width:'80%',
  },
  modalTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input:{
    borderWidth:1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  modalButtons:{
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  cancelButton:{
    backgroundColor:'#ccc',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelButtonText:{
    fontSize: 16,
    color: '#333',
  },
  saveButton:{
    backgroudColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  saveButtonText:{
    fontSize: 16,
    color: '#fff',
  },

})

export default NotesScreen