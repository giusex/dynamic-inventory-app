import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Dimensions,
  ScrollView,
} from 'react-native';
import Map from './Map';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import address from '../config/Global';

const { width, height } = Dimensions.get('window');

const ListCard = props => {
  const NUM_OF_LINES = 5;
  const link = address();

  const [loadMore, setLoadMore] = useState(false);

  const [numOfLines, setNumOfLines] = useState(0);
  const [isSearchModalVisible, setSearchModalVisible] = useState(false);
  let [equipments, setEquipments] = useState([]);
  let [searchEquipments, setSearchEquipments] = useState([]);
  let [isEquipments, setIsEquipments] = useState([]);

  const onTextLayout = useCallback(e => {
    numOfLines == 0 && setNumOfLines(e.nativeEvent.lines.length);
  });

  const onLoadMoreToggle = () => {
    setLoadMore(!loadMore);
  };

  const toggleSearchModal = (id, description) => {
    setSearchModalVisible(!isSearchModalVisible);
    setIsEquipments(description);
    getSearchEquipments(id);
  };

  let getEquipments = () => {
    /* /api/EquipmentEssential/{vehicleId}/{userId}/{ticketId} */
    fetch(`${link}/api/EquipmentEssential/1/1/${props.id}`)
      .then(response => response.json())
      .then(json => setEquipments(Object.values(json['hydra:member'])))
      .catch(error => console.error(error));
  };

  let getSearchEquipments = id => {
    fetch(`${link}/api/SearchEquipment/${id}/1`)
      .then(response => response.json())
      .then(json => setSearchEquipments(Object.values(json['hydra:member'])))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    getEquipments();
  }, []);

  return (
    <>
      <View style={styles.view}>
        <Text style={styles.title}>{props.titleOne}</Text>
        {props.titleOne === 'DESCRIZIONE' ? (
          <View>
            <Text
              style={styles.text}
              numberOfLines={
                numOfLines == 0 ? null : loadMore ? numOfLines : NUM_OF_LINES
              }
              onTextLayout={onTextLayout}>
              {props.text}
            </Text>
            {numOfLines > NUM_OF_LINES && (
              <Pressable onPress={onLoadMoreToggle}>
                <Text style={styles.loadText}>
                  {loadMore ? 'Leggi meno' : 'Leggi tutto'}
                </Text>
              </Pressable>
            )}
          </View>
        ) : null}
        {props.titleOne === 'MATERIALI DA UTILIZZARE' && width < 600 ? (
          <>
            {equipments.map(item => {
              return (
                <View
                  style={{
                    ...styles.row,
                    borderBottomWidth: 1,
                    borderBottomColor: '#D9D9D9',
                    padding: 7,
                  }}
                  key={item.id}>
                  <View style={{ flex: 3 }}>
                    <Text style={{...styles.textOne, fontSize:14 }}>{item.description}</Text>
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={{...styles.textTwo, fontSize:10 }}>Q.tà: {item.quantity}</Text>
                  </View>

                  <View
                    style={{
                      ...styles.row,
                      flex: 2,
                      justifyContent: 'flex-end',
                    }}>
                    {item.availability === 'DISPONIBILE' ? (
                      <Text style={{ ...styles.textThree, color: '#26BA85', fontSize: 11 }}>
                        {item.availability}
                      </Text>
                    ) : (
                      <Text style={{ ...styles.textThree, color: '#676D81',fontSize: 11 }}>
                        MANCANO: {item.availability}
                      </Text>
                    )}

                    {item.availability !== 'DISPONIBILE' ? (
                      <MaterialCommunityIcons
                        name="text-search"
                        size={20}
                        color="black"
                        style={{ marginLeft: 10 }}
                        onPress={() =>
                          toggleSearchModal(item.id, item.description)
                        }
                      />
                    ) : null}
                  </View>
                </View>
              );
            })}
          </>
        ) : (          <>
          {equipments.map(item => {
            return (
              <View
                style={{
                  ...styles.row,
                  borderBottomWidth: 1,
                  borderBottomColor: '#D9D9D9',
                  padding: 7,
                }}
                key={item.id}>
                <View style={{ flex: 3 }}>
                  <Text style={styles.textOne}>{item.description}</Text>
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={styles.textTwo}>Q.tà: {item.quantity}</Text>
                </View>

                <View
                  style={{
                    ...styles.row,
                    flex: 1,
                    justifyContent: 'flex-end',
                  }}>
                  {item.availability === 'DISPONIBILE' ? (
                    <Text style={{ ...styles.textThree, color: '#26BA85' }}>
                      {item.availability}
                    </Text>
                  ) : (
                    <Text style={{ ...styles.textThree, color: '#676D81' }}>
                      MANCANO: {item.availability}
                    </Text>
                  )}

                  {item.availability !== 'DISPONIBILE' ? (
                    <MaterialCommunityIcons
                      name="text-search"
                      size={20}
                      color="black"
                      style={{ marginLeft: 10 }}
                      onPress={() =>
                        toggleSearchModal(item.id, item.description)
                      }
                    />
                  ) : null}
                </View>
              </View>
            );
          })}
        </>)}
        {props.titleOne === 'NOTE' ? (
          <View>
            <Text
              style={styles.text}
              numberOfLines={
                numOfLines == 0 ? null : loadMore ? numOfLines : NUM_OF_LINES
              }
              onTextLayout={onTextLayout}>
              {props.note}
            </Text>
            {numOfLines > NUM_OF_LINES && (
              <Pressable onPress={onLoadMoreToggle}>
                <Text style={styles.loadText}>
                  {loadMore ? 'Leggi meno' : 'Leggi tutto'}
                </Text>
              </Pressable>
            )}
          </View>
        ) : null}
      </View>

      {/* Search Modal */}
      <Modal
        isVisible={isSearchModalVisible}
        style={styles.searchModal}
        hasBackdrop={false}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        animationInTiming={500}
        animationOutTiming={700}>
        <View
          style={[
            styles.searchModalView,
            width < 600 ? { width: '80%' } : { width: '50%' },
          ]}>
          <View style={styles.border}>
            <View style={{ ...styles.titleContainer, marginTop: 40 }}>
              <View style={{ ...styles.row, justifyContent: 'space-between' }}>
                <Text style={styles.title}>MATERIALE NELLE VICINANZE</Text>
                <MaterialIcons
                  name="clear"
                  size={24}
                  color="#000000"
                  onPress={toggleSearchModal}
                />
              </View>
              <Text style={{ ...styles.modalTitle, marginTop: 31 }}>
                {isEquipments}
              </Text>
            </View>
          </View>
          <ScrollView>
            {searchEquipments.map(item => {
              return (
                <View style={styles.border} key={item.id}>
                  <View
                    style={{
                      ...styles.titleContainer,
                      flexDirection: 'row',
                    }}>
                    <View style={{ flex: 1 }}>
                      <MaterialIcons
                        name="local-shipping"
                        size={33}
                        color="#676D81"
                      />
                    </View>

                    <View style={{ flex: 4 }}>
                      <Text
                        style={[
                          styles.truckTitle,
                          !item.available ? { color: '#676D81' } : null,
                        ]}>
                        {item.brand} {item.model}
                      </Text>
                      <Text
                        style={{ ...styles.truckDescription, marginTop: 10 }}>
                        Pezzi disponibili: {item.quantity}
                      </Text>
                      <Text style={styles.truckDescription}>
                        Utilizzato da: {item.name}
                      </Text>

                      <View style={{ ...styles.row, marginTop: 4 }}>
                        <FontAwesome name="phone" size={13} color="#000000" />
                        <Text
                          style={{
                            ...styles.truckTitle,
                            marginLeft: 7,
                          }}>
                          {item.telephone}
                        </Text>
                      </View>

                      <View style={{ width: 150, marginTop: 20 }}>
                        <Map
                          modal={true}
                          latitude={item.latitude}
                          longitude={item.longitude}
                          color={
                            item.available
                              ? (color = '#FF603E')
                              : (color = '#676D81')
                          }
                          backgroundColor={(backgroundColor = '#FFFFFF')}
                          borderColor={
                            item.available
                              ? (borderColor = '#FF603E')
                              : (borderColor = '#676D81')
                          }
                          iconColor={
                            item.available
                              ? (iconColor = '#FF603E')
                              : (iconColor = '#676D81')
                          }
                        />
                      </View>
                    </View>
                    <View style={{ flex: 2 }}>
                      <Text
                        style={[
                          styles.kmText,
                          !item.available ? { color: '#676D81' } : null,
                        ]}>
                        a {item.distance} km
                      </Text>
                      {!item.stateGPS ? (
                        <Text style={{ fontStyle: 'italic' }}>Offline</Text>
                      ) : null}
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#676D81',
    marginBottom: 30,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  loadText: {
    fontSize: 14,
    fontWeight: 'bold',
    underline: { textDecorationLine: 'underline' },
    color: 'black',
  },
  textOne: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  textTwo: {
    fontSize: 14,
    fontWeight: '400',
    color: '#676D81',
  },
  textThree: {
    fontSize: 14,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchModal: {
    flex: 1,
    alignItems: 'flex-end',
    margin: 0,
  },
  searchModalView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  titleContainer: {
    margin: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
  truckTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  truckDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#676D81',
  },
  kmText: {
    color: '#FF603E',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ListCard;
