import React from "react";
import { View, Text, FlatList } from "react-native";
import { Card, IconButton } from "react-native-paper";

export default function Home() {
  const cards = [
    {
      id: 1,
      name: "Properties",
      status: "4 active properties",
      icon: "business",
    },
    {
      id: 2,
      name: "Tenants",
      status: "3 active tenants",
      icon: "people",
    },
  ];

  const cardIcons = {
    Properties: "office-building",
    Tenants: "account-group",
  };

  const renderCardItem = ({ item }) => (
    <Card style={styles.cardContainer}>
      <Card.Content style={styles.cardContent}>
        <IconButton icon={cardIcons[item.name]} color="#000" size={30} />
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text>{item.status}</Text>
        </View>
        <IconButton
          icon="plus"
          color="#000"
          size={30}
          style={styles.iconButton}
          onPress={() => handleAddDetails(item.id)}
        />
      </Card.Content>
    </Card>
  );

  const handleAddDetails = (itemId) => {
    // Implement the action to add details for the selected card
    console.log(`Add details for card with id: ${itemId}`);
  };

  return (
    <View>
      <FlatList
        data={cards}
        renderItem={renderCardItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = {
  cardContainer: {
    margin: 10,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconButton: {
    marginLeft: 10,
  },
  cardTextContainer: {
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
};
