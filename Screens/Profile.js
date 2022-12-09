import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Navbar from '../components/Navbar.js';
import ProfileNavbar from '../components/ProfileNavbar.js';

const Map = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Navbar
        title="Profilo"
        icon={
          <Ionicons name="chevron-back-outline" size={20} color="#FFFFFF" />
        }
      />
      <ProfileNavbar />
      <View style={styles.body}>
        {/* NOME */}
        <View style={styles.view}>
          <View>
            <Text style={styles.text}>Nome</Text>
            <TextInput placeholder="Inserisci nome..." />
          </View>
          <View>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.textEditButton}>MODIFICA</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* E-MAIL */}
        <View style={styles.view}>
          <View>
            <Text style={styles.text}>E-mail</Text>
            <TextInput placeholder="Inserisci e-mail..." />
          </View>
          <View>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.textEditButton}>MODIFICA</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* PASSWORD */}
        <View style={styles.view}>
          <View>
            <Text style={styles.text}>Password</Text>
            <TextInput
              secureTextEntry={true}
              placeholder="Inserisci password..."
            />
          </View>
          <View>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.textEditButton}>MODIFICA</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* DISCONETTI */}
        <View style={styles.view}>
          <View>
            <Text style={styles.text}>Disconetti</Text>
            <Text style={styles.logoutText}>
              Scollega account da questo dispositivo
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.textLogoutButton}>ESCI</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {margin: 24, marginTop: 30},
  view: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  text: {
    color: '#676D81',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 14,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
  },
  editButton: {
    backgroundColor: '#8D8D8D',
    borderRadius: 6,
    width: 108,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textEditButton: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    width: 108,
    height: 35,
    borderWidth: 1,
    borderColor: '#FF603E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogoutButton: {
    color: '#FF603E',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Map;
