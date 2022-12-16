import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import Equipments from '../components/Equipments';
import Navbar from '../components/Navbar';
import LargeNavbar from '../components/LargeNavbar';
import Circle from '../components/Circle';
import ModalStateChange from '../components/State';
import addres from '../config/Global';

const { width, height } = Dimensions.get('window');

const Ticket = ({ route }) => {
  const navigation = useNavigation();
  const link = addres();

  const id = route.params.id;
  const client = route.params.client;
  const address = route.params.address;
  const telephone = route.params.telephone;
  const description = route.params.description;
  const notes = route.params.note;
  const processing = route.params.processing;

  let [state, setState] = useState(route.params.state);
  let [note, setNote] = useState();
  let [isConfirmModalVisible, setConfirmModalVisible] = useState(false);

  const toggleConfirmModal = () => {
    setConfirmModalVisible(!isConfirmModalVisible);
  };

  const getState = (state, note) => {
    // optional parameter
    note = note == null ? '' : note;
    fetch(`${link}/api/tickets/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        state: state,
        note: note,
      }),
    })
      .then(setState(state))
      .then(state !== 'in corso' ? navigation.goBack() : null);
  };

  return (
    <>
      <View style={styles.container}>
        <Navbar
          title="Ticket"
          icon={
            <Ionicons name="chevron-back-outline" size={20} color="#FFFFFF" />
          }
        />
        <LargeNavbar
          client={client}
          address={address}
          telephone={telephone}
          state={state}
        />
        <ScrollView style={styles.body}>
          <View style={{ marginBottom: 23 }}>
            <Equipments titleOne="DESCRIZIONE" text={description} />
          </View>

          <View style={{ marginBottom: 23 }}>
            {state === 'completato' ? (
              <Equipments titleOne="NOTE" note={notes} />
            ) : (
              <Equipments titleOne="MATERIALI DA UTILIZZARE" id={id} />
            )}
          </View>
        </ScrollView>

        {/* Bottom Navbar */}
        <View style={styles.bottomNavbar}>
          <View style={{ margin: 13, marginRight: 25 }}>
            {state === 'da fare' && processing === false ? (
              <TouchableOpacity
                style={{ ...styles.button, backgroundColor: '#26C6DA' }}
                onPress={() => {
                  getState('in corso');
                }}>
                <View style={styles.row}>
                  <MaterialCommunityIcons
                    name="progress-check"
                    size={24}
                    color="#FFFFFF"
                  />
                  <Text
                    style={{
                      ...styles.textBottom,
                      color: '#FFFFFF',
                      marginLeft: 7,
                    }}>
                    PRENDI IN CARICO
                  </Text>
                </View>
              </TouchableOpacity>
            ) : null}

            {state === 'da fare' && processing === true ? (
              <TouchableOpacity
                style={{ ...styles.button, backgroundColor: '#8D8D8D' }}>
                <View style={styles.row}>
                  <MaterialCommunityIcons
                    name="progress-check"
                    size={24}
                    color="#FFFFFF"
                  />
                  <Text
                    style={{
                      ...styles.textBottom,
                      color: '#FFFFFF',
                      marginLeft: 7,
                    }}>
                    PRENDI IN CARICO
                  </Text>
                </View>
              </TouchableOpacity>
            ) : null}

            {state === 'in corso' ? (
              <View style={styles.row}>
                <TouchableOpacity
                  style={{
                    ...styles.button,
                    backgroundColor: '#FFFFFF',
                    borderWidth: 1,
                    borderColor: '#FF603E',
                    marginRight: 30,
                  }}
                  onPress={() => {
                    getState('da fare');
                  }}>
                  <View style={styles.row}>
                    <MaterialIcons name="clear" size={width < 600 ? 18 : 24} color="#FF603E" />
                    <Text
                      style={[
                        styles.textBottom,
                        { color: '#FF603E', marginLeft: 7 },
                        width < 600 ? { fontSize: 11 } : { fontSize: 15 },
                      ]}>
                      NON COMPLETATO
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ ...styles.button, backgroundColor: '#26BA85' }}
                  onPress={toggleConfirmModal}>
                  <View style={styles.row}>
                    <AntDesign name="checkcircleo" size={width < 600 ? 18 : 24} color="#FFFFFF" />
                    <Text
                      style={[
                        styles.textBottom,
                        { color: '#FFFFFF', marginLeft: 7 },
                        width < 600 ? { fontSize: 11 } : { fontSize: 15 },
                      ]}>
                      COMPLETATO
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>
      </View>

      {/* Confirm Modal */}
      {width < 600 ? (
        <Modal isVisible={isConfirmModalVisible} transparent={true}>
            <View style={styles.modalView}>
              <View>
                <Text style={styles.title}>CONFERMA CAMBIO STATO TICKET:</Text>
              </View>
              <View style={{ marginTop: 22 }}>
                <View style={{ flexDirection: 'row', justifyContent:"center", alignItems:"center"}}>
                  <ModalStateChange state="IN CORSO" />
                  <Circle />
                  <ModalStateChange state="COMPLETATO" />
                </View>
              </View>
              <View style={{ marginTop: 29 }}>
                <TextInput
                  style={[styles.minTextInput, styles.text]}
                  placeholder="Inserisci nota conclusiva..."
                  placeholderTextColor="#8D8D8D"
                  onChangeText={note => setNote(note)}
                  value={note}></TextInput>
                <View
                  style={{
                    marginTop: 22,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItem:'center'
                  }}>
                  <TouchableOpacity
                    style={[styles.modalButton, styles.undoButton]}
                    onPress={toggleConfirmModal}>
                    <View style={styles.row}>
                      <MaterialIcons name="clear" size={20} color="#676D81" />

                      <Text
                        style={{
                          ...styles.textButton,
                          color: '#676D81',
                          marginLeft: 7,
                        }}>
                        ANNULLA
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.modalButton, styles.confirmButton]}
                    onPress={() => {
                      setConfirmModalVisible(false);
                      getState('completato', note);
                    }}>
                    <View style={styles.row}>
                      <AntDesign
                        name="checkcircleo"
                        size={20}
                        color="#FFFFFF"
                      />

                      <Text
                        style={{
                          ...styles.textButton,
                          color: '#FFFFFF',
                          marginLeft: 7,
                        }}>
                        CONFERMA
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        </Modal>
      ) : (
        <Modal isVisible={isConfirmModalVisible} transparent={true}>
          <View style={styles.centeredModal}>
            <View style={styles.modalView}>
              <View>
                <Text style={styles.title}>CONFERMA CAMBIO STATO TICKET:</Text>
              </View>
              <View style={{ marginTop: 22 }}>
                <View style={{ flexDirection: 'row' }}>
                  <ModalStateChange state="IN CORSO" />
                  <Circle />
                  <ModalStateChange state="COMPLETATO" />
                </View>
              </View>
              <View style={{ marginTop: 29 }}>
                <TextInput
                  style={[styles.textInput, styles.text]}
                  placeholder="Inserisci nota conclusiva..."
                  placeholderTextColor="#8D8D8D"
                  onChangeText={note => setNote(note)}
                  value={note}></TextInput>
                <View
                  style={{
                    marginTop: 22,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                  }}>
                  <TouchableOpacity
                    style={[styles.modalButton, styles.undoButton]}
                    onPress={toggleConfirmModal}>
                    <View style={styles.row}>
                      <MaterialIcons name="clear" size={20} color="#676D81" />

                      <Text
                        style={{
                          ...styles.textButton,
                          color: '#676D81',
                          marginLeft: 7,
                        }}>
                        ANNULLA
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.modalButton, styles.confirmButton]}
                    onPress={() => {
                      setConfirmModalVisible(false);
                      getState('completato', note);
                    }}>
                    <View style={styles.row}>
                      <AntDesign
                        name="checkcircleo"
                        size={20}
                        color="#FFFFFF"
                      />

                      <Text
                        style={{
                          ...styles.textButton,
                          color: '#FFFFFF',
                          marginLeft: 7,
                        }}>
                        CONFERMA
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  centeredModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 34,
  },
  title: {
    fontSize: 14,
    color: '#676D81',
    fontWeight: 'bold',
  },
  minTextInput: {
    borderWidth: 1,
    borderColor: '#8D8D8D',
    borderRadius: 10,
    height: 86,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#8D8D8D',
    borderRadius: 10,
    width: 608,
    height: 86,
  },
  text: {
    color: '#8D8D8D',
    fontSize: 16,
    padding: 17,
  },
  modalButton: {
    paddingRight: 14,
    paddingLeft: 14,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },
  undoButton: {
    borderWidth: 1,
    borderColor: '#676D81',
    marginRight: 17,
  },
  confirmButton: {
    backgroundColor: '#26BA85',
  },
  textButton: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  bottomNavbar: {
    backgroundColor: '#FFFFFF',
    shadowOpacity: 0.25,
    shadowColor: 'grey',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  button: {
    padding: 15,
    borderRadius: 10,
  },
  textBottom: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Ticket;
