import React, { useEffect, useState, useCallback } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  RefreshControl,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import TicketButton from './TicketButton.js';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const TicketList = () => {


  const navigation = useNavigation();
  const isFocused = useIsFocused();

  let data = [];

  let [ticket, setTickets] = useState([]);
  let [refreshing, setRefreshing] = useState(false);
  let [spinner, setSpinner] = useState(true);

  let DATA = ticket['hydra:member'];
  let numberTicket = ticket['hydra:totalItems'];

  const getProcessing = () => {
    let processing = 'in corso';
    DATA.map(item => {
      data.push(item.ticket.state);
    });

    return data.includes(processing);
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      getTickets();
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  }, [refreshing]);

  const getTickets = () => {
    fetch('http://192.168.1.56:8000/api/users/1/users_tickets')
      .then(response => response.json())
      .then(json => setTickets(json))
      .then(setSpinner(false))
      .catch(error => setTickets(false));
  };

  useEffect(() => {
    isFocused && getTickets();
  }, [isFocused]);

  return (
    <>
      {spinner ? (
        <ActivityIndicator />
      ) : (
        <>
          {DATA ? (
            <>
              <View style={styles.row}>
                <View style={styles.containerTitle}>
                  <Text style={styles.textTitle}>Ticket da svolgere oggi:</Text>
                  <Text
                    style={{
                      ...styles.textTitle,
                      marginLeft: 5,
                      color: '#FF603E',
                    }}>
                    {numberTicket}
                  </Text>
                </View>
                <View>
                  <Text style={styles.textFilter}>In ordine di priorità</Text>
                </View>
              </View>
              <FlatList
                data={DATA}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Ticket', {
                        id: item.ticket.id,
                        client: item.ticket.client,
                        address: item.ticket.address,
                        state: item.ticket.state,
                        telephone: item.ticket.telephone,
                        description: item.ticket.description,
                        note: item.ticket.note,
                        processing: getProcessing(),
                      })
                    }>
                    <View style={styles.containerTicket}>
                      <TicketButton
                        client={item.ticket.client}
                        address={item.ticket.address}
                        state={item.ticket.state.toUpperCase()}
                      />
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.ticket.id}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
              />
            </>
          ) : null}
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  containerTitle: {
    flexDirection: 'row',
  },
  textTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  textFilter: {
    fontSize: 14,
    color: '#676D81',
    fontWeight: 'bold',
  },
  list: {
    width: '100%',
    height: '85%',
  },
  containerTicket: {
    marginTop: 20,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  offline: {
    color: '#8D8D8D',
    fontSize: 16,
  },
});

export default TicketList;
