import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.home, styles.homeLayout]}>
      <View style={styles.homeChild} />
      <Text style={[styles.swipe, styles.swipeFlexBox, styles.swipeTypo]}>
        Swipe
      </Text>
      <Text style={[styles.seeAll, styles.swipeFlexBox]}>See All</Text>
      <Text style={[styles.deviceList, styles.swipeFlexBox, styles.swipeTypo]}>
        Device list
      </Text>
      <Pressable
        style={[styles.wrapper, styles.frameLayout1]}
        onPress={() => navigation.navigate("Television")}
      >
        <Image
          style={[styles.icon, styles.homeLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-90.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.frameLayout1]}
        onPress={() => navigation.navigate("LogInDoor")}
      >
        <Image
          style={[styles.icon, styles.homeLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-91.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame, styles.frameLayout1]}
        onPress={() => navigation.navigate("Camera1")}
      >
        <Image
          style={[styles.icon, styles.homeLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-92.png")}
        />
      </Pressable>
      <Image
        style={[styles.homeItem, styles.frameLayout1]}
        resizeMode="cover"
        source={require("../assets/rectangle-931.png")}
      />
      <Pressable
        style={[styles.lightingSystem, styles.cameraPosition]}
        onPress={() => navigation.navigate("LightingSystem")}
      >
        <Text
          style={[styles.lightingSystem1, styles.doorTypo, styles.cameraTypo]}
        >
          LIGHTING SYSTEM
        </Text>
      </Pressable>
      <Text style={[styles.television, styles.doorTypo, styles.cameraTypo]}>
        TELEVISION
      </Text>
      <Text
        style={[
          styles.camera,
          styles.doorTypo,
          styles.cameraTypo,
          styles.cameraPosition,
        ]}
      >
        CAMERA
      </Text>
      <Text style={[styles.door, styles.doorTypo]}>DOOR</Text>
      <View style={[styles.homeInner, styles.homeInnerPosition]} />
      <View style={[styles.rectangleView, styles.homeInnerPosition]} />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.mt9, styles.frameLayout]} />
      </View>
      <Text style={[styles.helloMrUserContainer, styles.swipeFlexBox]}>
        <Text style={styles.helloMrUserWelcomeHome}>
          <Text style={styles.helloMrUser}>{`Hello Mr User
`}</Text>
          <Text>{`Welcome home
`}</Text>
        </Text>
        <Text style={styles.blankLine}> </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt9: {
    marginTop: 9,
  },
  homeLayout: {
    width: "100%",
    borderRadius: Border.br_5xl,
  },
  swipeFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  swipeTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.vertBleu,
  },
  frameLayout1: {
    height: 104,
    width: 318,
    left: 56,
    position: "absolute",
  },
  cameraPosition: {
    left: 98,
    position: "absolute",
  },
  doorTypo: {
    width: 235,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.latoExtrabold,
    fontWeight: "800",
    lineHeight: 30,
    fontSize: FontSize.size_5xl,
    height: 53,
  },
  cameraTypo: {
    color: Color.white,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.latoExtrabold,
    fontWeight: "800",
    lineHeight: 30,
    fontSize: FontSize.size_5xl,
  },
  homeInnerPosition: {
    width: 430,
    backgroundColor: Color.wheat,
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 5,
    backgroundColor: Color.vertBleu,
  },
  homeChild: {
    top: -57,
    left: -107,
    borderTopRightRadius: Border.br_9981xl,
    borderBottomRightRadius: Border.br_9981xl,
    backgroundColor: Color.c2,
    width: 724,
    height: 1232,
    position: "absolute",
  },
  swipe: {
    top: 126,
    left: -505,
    fontWeight: "600",
    fontFamily: FontFamily.museoModernoSemibold,
    color: Color.vertBleu,
  },
  seeAll: {
    top: 251,
    left: 349,
    fontSize: 10,
    lineHeight: 12,
    fontWeight: "300",
    fontFamily: FontFamily.museoModernoLight,
    color: Color.vertBleu,
  },
  deviceList: {
    top: 247,
    left: 34,
    fontWeight: "500",
    fontFamily: FontFamily.museoModernoMedium,
    color: Color.vertBleu,
  },
  icon: {
    height: "100%",
  },
  wrapper: {
    top: 442,
  },
  container: {
    top: 722,
  },
  frame: {
    top: 582,
  },
  homeItem: {
    top: 302,
    borderRadius: Border.br_5xl,
    width: 318,
    left: 56,
  },
  lightingSystem1: {
    height: 53,
  },
  lightingSystem: {
    top: 326,
  },
  television: {
    top: 465,
    left: 100,
    height: 53,
    position: "absolute",
  },
  camera: {
    top: 604,
    height: 53,
  },
  door: {
    top: 746,
    color: Color.gray_300,
    height: 53,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.latoExtrabold,
    fontWeight: "800",
    lineHeight: 30,
    fontSize: FontSize.size_5xl,
    left: 98,
    position: "absolute",
  },
  homeInner: {
    top: 53,
    height: 182,
  },
  rectangleView: {
    top: 0,
    height: 53,
  },
  ellipseIcon: {
    top: 102,
    left: 326,
    width: 80,
    height: 82,
    position: "absolute",
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 37,
  },
  frameItem: {
    width: 23,
  },
  rectangleParent: {
    top: 46,
    left: 36,
    height: 19,
    width: 37,
    position: "absolute",
  },
  helloMrUser: {
    fontSize: FontSize.size_17xl,
  },
  helloMrUserWelcomeHome: {
    color: Color.vertBleu,
  },
  blankLine: {
    fontSize: FontSize.size_13xl,
    color: Color.black,
  },
  helloMrUserContainer: {
    top: 110,
    left: 33,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    width: 234,
    height: 80,
  },
  home: {
    backgroundColor: Color.white,
    flex: 1,
    height: 947,
    overflow: "hidden",
  },
});

export default Home;
