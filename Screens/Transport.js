import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import Ducato from '../images/ducato.svg';
import address from '../config/Global';

const { width, height } = Dimensions.get('window');

const Transport = () => {
  const link = address();

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
    fetch(`${link}/api/vehicles/1`)
      .then(response => response.json())
      .then(json => setInventory(json))
      .then(setSpinner(false))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    getTransport();
  }, []);

  if (width < 600) {
    return (
      <>
        {spinner ? (
          <ActivityIndicator />
        ) : (
          <>
            {inventory ? (
              <>
                <Text style={[styles.title, styles.minTitleSize]}>
                  Trasporto da utilizzare oggi
                </Text>
                <ScrollView
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }>
                  <View style={[styles.container, { padding: 10 }]}>
                    <View style={[styles.truck, styles.minTruckSize]}>
                      <Ducato width={77} height={49} />
                    </View>
                    <View style={styles.body}>
                      <View>
                        <Text style={[styles.title, styles.minTitleSize]}>
                          {inventory.brand} {inventory.model}
                        </Text>
                      </View>

                      <View>
                        <Text style={[styles.text, styles.minTextSize]}>
                          {inventory.description}
                        </Text>
                      </View>
                      <View style={{ marginTop: 20 }}>
                        <View style={styles.row}>
                          <View style={{ flex: 1 }}>
                            <Text
                              style={[styles.textOne, styles.minTextOneSize]}>
                              TARGA
                            </Text>
                          </View>
                          <View style={{ flex: 3 }}>
                            <Text
                              style={[styles.textTwo, styles.minTextTwoSize]}>
                              {inventory.plate}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.row}>
                          <View style={{ flex: 1 }}>
                            <Text
                              style={[styles.textOne, styles.minTextOneSize]}>
                              DIMENSIONI
                            </Text>
                          </View>
                          <View style={{ flex: 3 }}>
                            <Text
                              style={[styles.textTwo, styles.minTextTwoSize]}>
                              {inventory.dimension}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.row}>
                          <View style={{ flex: 1 }}>
                            <Text
                              style={[styles.textOne, styles.minTextOneSize]}>
                              CARBURANTE
                            </Text>
                          </View>
                          <View style={{ flex: 3 }}>
                            <Text
                              style={[styles.textTwo, styles.minTextTwoSize]}>
                              {inventory.fuel}
                            </Text>
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
  }
  {
    return (
      <>
        {spinner ? (
          <ActivityIndicator />
        ) : (
          <>
            {inventory ? (
              <>
                <Text style={[styles.title, styles.maxTitleSize]}>
                  Trasporto da utilizzare oggi
                </Text>
                <ScrollView
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }>
                  <View style={styles.container}>
                    <View style={[styles.truck, styles.maxTruckSize]}>
                      <Ducato width={92} height={64} />
                    </View>
                    <View style={styles.body}>
                      <View>
                        <Text style={[styles.title, styles.maxTitleSize]}>
                          {inventory.brand} {inventory.model}
                        </Text>
                      </View>

                      <View>
                        <Text style={[styles.text, styles.maxTextSize]}>
                          {inventory.description}
                        </Text>
                      </View>
                      <View style={{ marginTop: 20 }}>
                        <View style={styles.row}>
                          <View style={{ flex: 1 }}>
                            <Text
                              style={[styles.textOne, styles.maxTextOneSize]}>
                              TARGA
                            </Text>
                          </View>
                          <View style={{ flex: 3 }}>
                            <Text
                              style={[styles.textTwo, styles.maxTextTwoSize]}>
                              {inventory.plate}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.row}>
                          <View style={{ flex: 1 }}>
                            <Text
                              style={[styles.textOne, styles.maxTextOneSize]}>
                              DIMENSIONI
                            </Text>
                          </View>
                          <View style={{ flex: 3 }}>
                            <Text
                              style={[styles.textTwo, styles.maxTextTwoSize]}>
                              {inventory.dimension}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.row}>
                          <View style={{ flex: 1 }}>
                            <Text
                              style={[styles.textOne, styles.maxTextOneSize]}>
                              CARBURANTE
                            </Text>
                          </View>
                          <View style={{ flex: 3 }}>
                            <Text
                              style={[styles.textTwo, styles.maxTextTwoSize]}>
                              {inventory.fuel}
                            </Text>
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
  }
};

const styles = StyleSheet.create({
  minTitleSize: {
    fontSize: 18,
  },
  maxTitleSize: {
    fontSize: 24,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 22,
    color: 'black',
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    marginBottom: 20,
  },
  minTruckSize: {
    width: 80,
    height: 80,
  },
  maxTruckSize: {
    width: 110,
    height: 110,
  },
  truck: {
    backgroundColor: '#F4F4F4',
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    marginLeft: 31,
    padding: 10,
  },
  minTextSize: {
    fontSize: 13,
  },
  maxTextSize: {
    fontSize: 16,
  },
  text: {
    color: '#676D81',
    fontWeight: '400',
  },
  description: {
    marginTop: 15,
    flexDirection: 'row',
  },
  minTextOneSize: {
    fontSize: 13,
  },
  maxTextOneSize: {
    fontSize: 15,
  },
  textOne: {
    color: '#676D81',
    fontWeight: 'bold',
  },
  minTextTwoSize: {
    fontSize: 12,
  },
  maxTextTwoSize: {
    fontSize: 14,
  },
  textTwo: {
    color: '#676D81',
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
