import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Camera = () => {
  return (
    <View style={styles.camera}>
      <View style={styles.cameraChild} />
      <Image
        style={styles.backButtonIcon}
        resizeMode="cover"
        source={require("../assets/back-button.png")}
      />
      <Image
        style={styles.cameraItem}
        resizeMode="cover"
        source={require("../assets/rectangle-97.png")}
      />
      <Text style={[styles.text, styles.textFlexBox]}>{`16:12:12
29/02/2023`}</Text>
      <Text style={styles.camera1}>Camera</Text>
      <View style={styles.cam1} />
      <Text style={[styles.stair, styles.textFlexBox]}>STAIR</Text>
      <Image
        style={styles.image4Icon}
        resizeMode="cover"
        source={require("../assets/image-4.png")}
      />
      <Image
        style={[styles.cameraInner, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector-5.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector-6.png")}
      />
      <View style={styles.rectangleView} />
      <Image
        style={styles.image5Icon}
        resizeMode="cover"
        source={require("../assets/image-5.png")}
      />
      <Image
        style={styles.polygonIcon}
        resizeMode="cover"
        source={require("../assets/polygon-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.black,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 27,
    width: 11,
    top: 842,
    position: "absolute",
  },
  cameraChild: {
    top: -36,
    left: -79,
    backgroundColor: Color.wheat,
    width: 603,
    height: 266,
    position: "absolute",
  },
  backButtonIcon: {
    top: 44,
    left: 32,
    width: 24,
    height: 34,
    position: "absolute",
  },
  cameraItem: {
    top: 131,
    left: 22,
    width: 385,
    height: 489,
    position: "absolute",
  },
  text: {
    top: 552,
    fontSize: FontSize.size_sm,
    lineHeight: 17,
    fontFamily: FontFamily.latoRegular,
    textAlign: "right",
    width: 136,
    height: 76,
    left: 258,
  },
  camera1: {
    top: 40,
    fontSize: FontSize.size_17xl,
    lineHeight: 44,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    color: Color.vertBleu,
    textAlign: "left",
    width: 234,
    height: 80,
    left: 258,
    position: "absolute",
  },
  cam1: {
    top: 733,
    left: 11,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.goldenrod,
    width: 408,
    height: 186,
    position: "absolute",
  },
  stair: {
    top: 826,
    left: 37,
    fontSize: FontSize.size_5xl,
    lineHeight: 30,
    fontWeight: "800",
    fontFamily: FontFamily.latoExtrabold,
    textAlign: "center",
    justifyContent: "center",
    width: 139,
    height: 53,
  },
  image4Icon: {
    top: 737,
    left: 25,
    width: 158,
    height: 106,
    position: "absolute",
  },
  cameraInner: {
    left: 40,
  },
  vectorIcon: {
    left: 162,
  },
  rectangleView: {
    top: 0,
    left: -1,
    borderTopRightRadius: Border.br_9981xl,
    borderBottomRightRadius: Border.br_9981xl,
    backgroundColor: Color.vertBleu,
    width: 1,
    position: "absolute",
    height: 932,
  },
  image5Icon: {
    top: 748,
    left: 225,
    width: 167,
    height: 167,
    position: "absolute",
  },
  polygonIcon: {
    top: 868,
    left: 71,
    width: 72,
    height: 15,
    position: "absolute",
  },
  camera: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.c2,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 932,
  },
});

export default Camera;
