import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CurrentBookingCard } from "./CurrentBookingCard";

export const CurrentBookingsComponent = (props) => {
  const { bookings } = props;

  function renderItem({ item }) {
    const { id } = item;

    return <CurrentBookingCard key={id} bookingDetails={item} />;
  }

  return (
    <View>
      <Text style={styles.title}>Current Bookings</Text>
      <FlatList data={bookings} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});