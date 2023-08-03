import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import LocImg from "../../assets/images/map-pin.png";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function Post({ post }) {
  const navigation = useNavigation();
  const { id, title, place, coordinates, comments, img } = post;
  // console.log(img);
  return (
    <View key={id} style={styles.MainWrap}>
      <View style={styles.PhotoWrap}>
        <Image source={img} alt={title} style={styles.Photo} />
        {/* <Image source={{ uri: img }} alt={title} style={styles.Photo} /> */}
      </View>
      <Text style={styles.Title}>{title}</Text>
      <View style={styles.ComentsPlaceWrap}>
        <Pressable
          style={styles.Comments}
          onPress={() =>
            navigation.navigate("CommentsScreen", {
              comments,
              img,
              id,
              title,
            })
          }
        >
          <FontAwesome
            name="comments-o"
            size={24}
            color="#BDBDBD"
            style={{ marginRight: 6 }}
          />

          <Text style={styles.comentsQuantity}>{comments.length}</Text>
        </Pressable>

        <Pressable
          style={styles.Place}
          onPress={() =>
            navigation.navigate("MapScreen", {
              postLocation: coordinates,
              title,
              place,
            })
          }
        >
          <Image source={LocImg} style={styles.LocImg} />
          <Text style={styles.PlaceText}>{place}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainWrap: {
    width: "100%",
  },
  PhotoWrap: {
    width: "100%",
    height: 240,
    backgroundColor: "black",
    marginBottom: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  Photo: {
    width: "100%",
    height: "100%",
  },
  Title: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 500,
    color: "#212121",
    marginBottom: 8,
  },
  ComentsPlaceWrap: {
    flexDirection: "row",
    marginBottom: 32,
  },
  Comments: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 24,
  },
  Place: {
    marginLeft: "auto",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  PlaceText: {
    textDecorationLine: "underline",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
    color: "#212121",
  },
  LocImg: {
    width: 24,
    height: 24,
  },
});
