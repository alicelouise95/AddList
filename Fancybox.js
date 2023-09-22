import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Fancybox() {
  return (
    <View style={fancystyles.redbox}>
      <Text style={fancystyles.text}>You added a fancy box!</Text>
    </View>
  );
}

const fancystyles = StyleSheet.create({
  redbox: {
    flex: 1,
    backgroundColor: "#00ADB5",
    justifyContent: "center",
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#393E46",
  },

  text: {
    color: "#EEEEEE",
    textAlign: "center",
  },
});
