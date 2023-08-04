import UserLogo from "../../assets/images/UserLogo.jpg";
// import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import Post from "../Components/Post";
import { posts } from "../Data/postsData";

export default PostsScreen = () => {
  return (
    <View style={styles.MainWrap}>
      <View style={styles.UserWrap}>
        <View style={styles.UserImgCont}>
          <Image source={UserLogo}></Image>
        </View>
        <View>
          <Text style={styles.Name}>Natali Romanova</Text>
          <Text style={styles.Email}>email@example.com</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  MainWrap: {
    paddingLeft: 16,
    paddingRight: 16,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
  },

  UserWrap: {
    marginTop: 32,
    marginBottom: 32,
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  UserImgCont: {
    width: 60,
    height: 60,
  },
  UserImg: {
    maxWidth: "100%",
    objectFit: "cover",
  },
});
