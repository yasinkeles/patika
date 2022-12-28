import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";

Touchable = ({ liste }) => {
  return (
    <View style={styles.View}>
      <Image style={styles.Image} source={{ uri: liste.imgURL }} />
      <Text style={styles.author}> {liste.price}</Text>

      <Text style={styles.title}>{liste.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "ghostwhite",
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    width: Dimensions.get("window").width / 2.2,
  },
  Image: {
    height: Dimensions.get("window").height / 4,
    borderRadius: 10,
    margin: 5,
    resizeMode: "contain",
    padding: 20,
  },
  title: {
    fontSize: 16,
    marginVertical: 5,
    color: "midnightblue",
    fontWeight: "bold",
  },
  author: {
    fontSize: 10,
    color: "tomato",
  },
  description: {
    fontSize: 12,
    marginBottom: 5,
  },
});

export default Touchable;
