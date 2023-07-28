import React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import LocImg from "../../assets/images/map-pin.png";

export default CreatePostScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.PhotoWrap}></View>
      <Text style={styles.DownLoadText}>Завантажте фото</Text>
      <View>
        <View>
          <View style={styles.InputAreaWrap}>
            <TextInput
              type="text"
              placeholder="Назва..."
              // value={email}
              // onChangeText={onChangeEmail}
              // keyboardType="email-address"
              placeholderTextColor={"#BDBDBD"}
              selectionColor="#212121"
              // onFocus={() => onFocusMail()}
              // style={[{ borderColor: focusColorMail }, styles.Input]}
            ></TextInput>
          </View>
          <View style={styles.LocWrap}>
            <Image source={LocImg} style={styles.LocImg} />
            <View style={styles.InputAreaLocWrap}>
              <TextInput
                type="text"
                placeholder="Місцевість..."
                // maxLength={37}
                // value={password}
                // onChangeText={onChangePass}
                // secureTextEntry={showPass}
                placeholderTextColor={"#BDBDBD"}
                selectionColor="#212121"
                // onFocus={() => onFocusPass()}
                // style={[{ borderColor: focusColorPass }, styles.Input]}
              ></TextInput>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
  },

  PhotoWrap: {
    width: "100%",
    height: 240,
    marginTop: 32,
    marginBottom: 8,
    backgroundColor: "#E8E8E8",
  },
  LocImg: {
    width: 24,
    height: 24,
  },
  LocWrap: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  InputAreaWrap: {
    height: 50,
    paddingTop: 16,
    paddingBottom: 15,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  InputAreaLocWrap: { height: 50, paddingTop: 16, paddingBottom: 15, },
  DownLoadText: {
    marginBottom: 32,
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: 400,
    color: "#BDBDBD",
  },
});
