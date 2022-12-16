import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Navbar from '../components/Navbar.js';
import Card from '../components/Card.js';
import TicketList from '../components/TicketList.js';
import Inventory from './Inventory.js';
import Transport from './Transport.js';

const { width, height } = Dimensions.get('window');

const Dashboard = () => {
  const ICON_BIG_DIM = width < 600 ? 22 : 35;
  const ICON_LITTLE_DIM = 18;

  const card = {
    ticket: {
      value: 'Ticket da fare',
      icon: 'auto-awesome-motion',
    },
    shipping: {
      value: 'Trasporto',
      icon: 'local-shipping',
    },
    assignment: {
      value: 'Inventario',
      icon: 'assignment',
    },
    map: {
      value: 'Mappa',
      icon: 'map',
    },
  };

  let [isActive, setActive] = useState(card.ticket.value);
  let [icon, setIcon] = useState(card.ticket.icon);

  const getView = () => {
    if (isActive === card.ticket.value) {
      return <TicketList />;
    }
    if (isActive === card.shipping.value) {
      return <Transport />;
    }
    if (isActive === card.assignment.value) {
      return <Inventory />;
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Navbar
          title={isActive}
          icon={<Icon name={icon} size={ICON_LITTLE_DIM} color="#FFFFFF" />}
          back={false}
        />
      </View>
      {/* Card */}
      <View
        style={[
          styles.cardContainer,
          width < 600 ? { height: 90 } : { height: 134 },
        ]}>
        <Pressable
          onPress={() => {
            setActive(card.ticket.value);
            setIcon(card.ticket.icon);
          }}>
          <Card
            title={card.ticket.value}
            {...(isActive === card.ticket.value
              ? { active: true }
              : { active: false })}
            icon={<Icon name={card.ticket.icon} size={ICON_BIG_DIM} />}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            setActive(card.shipping.value);
            setIcon(card.shipping.icon);
          }}>
          <Card
            title={card.shipping.value}
            {...(isActive === card.shipping.value
              ? { active: true }
              : { active: false })}
            icon={<Icon name={card.shipping.icon} size={ICON_BIG_DIM} />}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            setActive(card.assignment.value);
            setIcon(card.assignment.icon);
          }}>
          <Card
            title={card.assignment.value}
            {...(isActive === card.assignment.value
              ? { active: true }
              : { active: false })}
            icon={<Icon name={card.assignment.icon} size={ICON_BIG_DIM} />}
          />
        </Pressable>
      </View>

      {/* Body */}
      <View
        style={[
          styles.body,
          width < 600 ? { marginTop: 100 } : { marginTop: 125 },
        ]}>
        {getView()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  cardContainer: {
    backgroundColor: '#FF603E',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default Dashboard;
