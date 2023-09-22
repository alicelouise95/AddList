import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Fancybox from "./Fancybox";

export default function App() {
  const [boxList, setBoxlist] = useState([]);
  /* Defining a state variable 'boxList' to store a list of boxes. */

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.listButton}
          onPress={() => {
            const newList = [...boxList, { key: boxList.length.toString() }];
            /* Creating a new list - ("newList") by cloning the existing "boxlist"
            and adding a new box with a unique "key". */
            setBoxlist(newList);
            /* Update the 'boxList' state with the new list. */
          }}
        >
          <Text style={styles.buttonText}>Click here to add box to list</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          /* Displaying a scrollable list. */
          data={boxList}
          /* Providing the data source for the list. */
          renderItem={({ item }) => <Fancybox />}
          /* Specifying how each item in "boxList" should be displayed. */
          keyExtractor={(item) => item.key}
          /* "keyExtractor" defines a unique key for each item in the list. */
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    marginTop: 200,
  },

  listButton: {
    borderWidth: 1,
    borderRadius: 30,
    height: 70,
    width: 130,
    backgroundColor: "#00ADB5",
    borderColor: "#393E46",
    alignContent: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#EEEEEE",
    textAlign: "center",
    fontSize: 14,
  },
});
