import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import Ducato from '../images/ducato.svg';

const Transport = () => {
  let [inventory, setInventory] = useState([]);
  let [refreshing, setRefreshing] = useState(false);
  let [spinner, setSpinner] = useState(true);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      getTransport();
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  }, [refreshing]);

  const getTransport = () => {
    fetch('http://192.168.1.56:8000/api/vehicles/1')
      .then(response => response.json())
      .then(json => setInventory(json))
      .then(setSpinner(false))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    getTransport();
  }, []);

  return (
    <>
      {spinner ? (
        <ActivityIndicator />
      ) : (
        <>
          {inventory ? (
            <>
              <Text style={styles.title}>Trasporto da utilizzare oggi</Text>
              <ScrollView
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }>
                <View style={styles.container}>
                  <View style={styles.truck}>
                    <Ducato width={92} height={64} />
                  </View>
                  <View style={styles.body}>
                    <View>
                      <Text style={{ ...styles.title, fontSize: 22 }}>
                        {inventory.brand} {inventory.model}
                      </Text>
                    </View>

                    <View>
                      <Text style={styles.text}>{inventory.description}</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                      <View style={styles.row}>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.textOne}>TARGA</Text>
                        </View>
                        <View style={{ flex: 3 }}>
                          <Text style={styles.textTwo}>{inventory.plate}</Text>
                        </View>
                      </View>
                      <View style={styles.row}>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.textOne}>DIMENSIONI</Text>
                        </View>
                        <View style={{ flex: 3 }}>
                          <Text style={styles.textTwo}>
                            {inventory.dimension}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.row}>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.textOne}>CARBURANTE</Text>
                        </View>
                        <View style={{ flex: 3 }}>
                          <Text style={styles.textTwo}>{inventory.fuel}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </>
          ) : null}
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 22,
    color: 'black',
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
  },
  truck: {
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    marginLeft: 31,
    padding: 10,
  },
  text: {
    color: '#676D81',
    fontSize: 16,
    fontWeight: '400',
  },
  description: {
    marginTop: 15,
    flexDirection: 'row',
  },
  textOne: {
    color: '#676D81',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textTwo: {
    color: '#676D81',
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    padding: 5,
  },
});

export default Transport;
