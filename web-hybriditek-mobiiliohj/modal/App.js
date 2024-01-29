import { StyleSheet, Text, View, Alert, Modal, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(!modal);
        }}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is modal</Text>
            <Pressable
              style={styles.button}
              onPress={() => setModal(!modal)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModal(true)}>
        <Text>Show modal message</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    width: '100%',
    padding: 40,
    fontSize: 16,
    elevation: 2,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
  },
  textStyle: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
    elevation: 2,
  },
});
