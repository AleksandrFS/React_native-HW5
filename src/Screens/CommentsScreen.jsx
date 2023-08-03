import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

export default CommentsScreen = () => {
    const {
      params: {
       comments, img, id, title
      },
    } = useRoute();
    return (
      <View style={styles.MainWrap}>
        <View style={styles.PhotoWrap}>
          <Image source={img} alt={title} style={styles.Photo}/>
        </View>
        {/* <FlatList
          data={(comments)}
          renderItem={({ item }) => <Post post={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        /> */}
      </View>
    );
}

const styles = StyleSheet.create({
  MainWrap: {
    width: "100%",
    height: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
  },
  PhotoWrap: {
    width: "100%",
    height: 240,
    marginTop: 32,
    backgroundColor: "black",
    marginBottom: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  Photo: {
    width: "100%",
    height: "100%",
  },
});