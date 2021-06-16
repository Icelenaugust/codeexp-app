import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export const CurrentBookingCard = (props) => {
  const { bookingDetails } = props;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: bookingDetails.coverImage,
        }}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.text}>{bookingDetails.companyName}</Text>
        <Text style={styles.text}>{bookingDetails.startDate} to {bookingDetails.endDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    minHeight: 75,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 75,
    width: 75,
    marginRight: 20,
    resizeMode: "cover",
    alignSelf: "center",
  },
  text: {
    fontSize: 12,
  },
  innerContainer: {
    // justifyContent: "flex-start",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "100%",
  }
});
