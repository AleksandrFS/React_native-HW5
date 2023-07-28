import UserLogo from "../../assets/images/UserLogo.jpg";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View, StyleSheet, Image } from "react-native";

export default PostsScreen = () => {
  return (
    <View style={styles.MainWrap}>
      <View style={styles.UserWrap}>
        <View style={styles.UserImgCont}>
          <Image source={UserLogo}></Image>
        </View>
        <View style={styles.UserDataWrap}>
          <Text style={styles.Name}>Natali Romanova</Text>
          <Text style={styles.Email}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainWrap: {
    paddingLeft: 16,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
  },

  UserWrap: {
    marginTop: 32,
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
