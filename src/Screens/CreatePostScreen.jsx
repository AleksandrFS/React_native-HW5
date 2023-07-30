import React, { useState, useEffect, useRef } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { Camera, requestCameraPermissionsAsync } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import LocImg from "../../assets/images/map-pin.png";
import CameraIconImg from "../../assets/images/camera-icon.png";
import { Pressable } from "react-native";

export default CreatePostScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        await MediaLibrary.requestPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.PhotoWrap}>
        <Camera type={type} ref={setCameraRef} style={styles.Camera} />

        <Pressable
          style={styles.CameraBtn}
          onPress={async () => {
            console.log("photo");
            if (cameraRef) {
              const { uri } = await cameraRef.takePictureAsync();
              await MediaLibrary.createAssetAsync(uri);
            }
          }}
        >
          <Image source={CameraIconImg}></Image>
        </Pressable>
        <Pressable
          style={styles.flipContainer}
          onPress={() => {
            console.log("flip");
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <Ionicons name="camera-reverse-outline" size={28} color="white" />
        </Pressable>

        <Camera />
      </View>

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

  Camera: { flex: 1 },

  PhotoWrap: {
    width: "100%",
    height: 240,
    marginTop: 32,
    marginBottom: 8,
    borderRadius: 8,
    overflow: "hidden",
    // flex: 1,
    // backgroundColor: "transparent",
    // justifyContent: "flex-end",
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
  InputAreaLocWrap: { height: 50, paddingTop: 16, paddingBottom: 15 },
  DownLoadText: {
    marginBottom: 32,
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: 400,
    color: "#BDBDBD",
  },
  CameraBtn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
    opacity: 0.5,
  },
  flipContainer: {
    position: "absolute",
    // flex: 1,
    // alignSelf: "flex-end",
    // paddingRight: 10,
  },
});
