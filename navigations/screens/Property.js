// PropertyPage.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = {
  cardContainer: {
    margin: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButton: {
    marginLeft: 10,
  },
  cardTextContainer: {
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
};

const PropertyPage = ({ properties }) => {
  const renderPropertyItem = ({ item }) => (
    <Card style={styles.cardContainer}>
      <Card.Content style={styles.cardContent}>
        <MaterialCommunityIcons name="office-building" size={30} color="#000" />
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>
        {/* You can add more property-related information or actions here */}
      </Card.Content>
    </Card>
  );

  return (
    <View>
      <Text>All properties</Text>
      <FlatList
        data={properties}
        renderItem={renderPropertyItem}
        keyExtractor={(item) => item.id.toString()}
        //no exported dat yet to populate the list
      />
    </View>
  );
};

export default PropertyPage;
