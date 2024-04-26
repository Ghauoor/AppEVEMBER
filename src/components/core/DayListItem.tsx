import { StyleSheet, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import React from "react";

type DayListItem = {
  day: number;
};

const DayListItem = ({ day }: DayListItem) => {
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  );
};

export default DayListItem;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#F9EDE3",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
    borderColor: "#9b4521",
    aspectRatio: 1,
  },

  text: {
    color: "#9b4521",
    fontSize: 70,
    fontFamily: "AmaticSC",
  },
});
