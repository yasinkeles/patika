import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TextInput,
} from "react-native";
import Touchable from "./src/Buton/OzelButon";
import data from "./src/data/data.json";

export default function App() {
  const renderList = ({ item }) => <Touchable liste={item} />;

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView></ScrollView> */}
      <View style={styles.headerArea}>
        <Text style={styles.headerText}>PATIKASTORE</Text>
        <TextInput
          style={styles.searchInput}
          inlineImageLeft="search_icon"
          placeholder="Ara..."
        />
      </View>
      <View style={styles.View}>
        <FlatList
          horizontal={false}
          numColumns={2}
          data={data}
          renderItem={renderList}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    margin: 10,
  },
  View: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});
