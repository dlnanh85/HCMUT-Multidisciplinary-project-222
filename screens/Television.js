import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Television = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.television}>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Camera1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-94.png")}
        />
      </Pressable>
      <View style={styles.televisionChild} />
      <Image
        style={styles.backButtonPosition}
        resizeMode="cover"
        source={require("../assets/back-button.png")}
      />
      <Text style={styles.television1}>Television</Text>
      <Pressable
        style={styles.backButtonPosition}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/back-button.png")}
        />
      </Pressable>
      <Image
        style={styles.colorfulPlannerMobileAppPr}
        resizeMode="cover"
        source={require("../assets/colorful-planner-mobile-app-promotion-instagram-post-1.png")}
      />
      <Text style={styles.tvName}>TV name</Text>
      <Image
        style={[styles.televisionInner, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector-3.png")}
      />
      <Text style={[styles.volume, styles.volumeTypo, styles.volumeLayout]}>
        Volume
      </Text>
      <Text style={[styles.voiceCommand, styles.volumeTypo]}>
        Voice command
      </Text>
      <Text style={[styles.turnOnoff, styles.volumeTypo, styles.volumeLayout]}>
        Turn ON/OFF
      </Text>
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame-19.png")}
      />
      <View style={styles.rectangleView} />
      <View style={[styles.ellipseParent, styles.frameChildLayout]}>
        <Image
          style={styles.frameChildLayout}
          resizeMode="cover"
          source={require("../assets/ellipse-42.png")}
        />
        <Image
          style={[styles.image3Icon, styles.mt_48]}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
      </View>
      <View style={styles.frameView}>
        <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
          <View style={[styles.frameItem, styles.frameLayout]} />
          <Text style={[styles.text, styles.mt_43, styles.textTypo]}>+</Text>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleParentPosition]}>
        <View style={[styles.frameInner, styles.frameLayout]} />
        <Text style={[styles.text1, styles.mt_43, styles.textTypo]}>-</Text>
      </View>
      <Text style={[styles.channel, styles.volumeTypo, styles.volumeLayout]}>
        Channel
      </Text>
      <View style={[styles.rectangleContainer, styles.rectangleParentPosition]}>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <Text style={[styles.text, styles.mt_43, styles.textTypo]}>+</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleParentPosition]}>
        <View style={[styles.frameInner, styles.frameLayout]} />
        <Text style={[styles.text1, styles.mt_43, styles.textTypo]}>-</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_48: {
    marginTop: -48,
  },
  mt_43: {
    marginTop: -43,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  vectorIconPosition: {
    top: 396,
    height: 34,
    width: 24,
    position: "absolute",
  },
  volumeTypo: {
    height: 43,
    color: Color.gray_200,
    lineHeight: 25,
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.latoExtrabold,
    fontWeight: "800",
    position: "absolute",
  },
  volumeLayout: {
    width: 127,
    height: 43,
    color: Color.gray_200,
    lineHeight: 25,
    fontSize: FontSize.size_xl,
  },
  frameChildLayout: {
    height: 62,
    width: 62,
  },
  rectangleParentPosition: {
    paddingBottom: 28,
    paddingLeft: Padding.p_43xl,
    height: 90,
    width: 62,
    alignItems: "center",
    position: "absolute",
  },
  frameLayout: {
    transform: [
      {
        rotate: "90deg",
      },
    ],
    width: 90,
    height: 62,
    borderRadius: Border.br_16xl,
  },
  textTypo: {
    height: 37,
    width: 23,
    lineHeight: 49,
    fontSize: FontSize.size_21xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.latoExtrabold,
    fontWeight: "800",
  },
  icon: {
    borderRadius: Border.br_5xl,
    height: "100%",
  },
  wrapper: {
    left: 35,
    width: 372,
    height: 447,
    top: 463,
    position: "absolute",
  },
  televisionChild: {
    top: -30,
    left: -128,
    backgroundColor: Color.wheat,
    width: 603,
    height: 259,
    position: "absolute",
  },
  backButtonPosition: {
    height: 34,
    width: 24,
    top: 44,
    left: 32,
    position: "absolute",
  },
  television1: {
    top: 40,
    left: 258,
    fontSize: FontSize.size_17xl,
    lineHeight: 44,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    color: Color.vertBleu,
    textAlign: "left",
    width: 234,
    height: 80,
    position: "absolute",
  },
  colorfulPlannerMobileAppPr: {
    top: 99,
    left: 36,
    width: 355,
    height: 278,
    position: "absolute",
  },
  tvName: {
    top: 377,
    left: 84,
    fontSize: FontSize.size_29xl,
    lineHeight: 59,
    color: Color.buse,
    width: 273,
    height: 65,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.latoExtrabold,
    fontWeight: "800",
    alignItems: "center",
    position: "absolute",
  },
  televisionInner: {
    left: 41,
  },
  vectorIcon: {
    left: 374,
  },
  volume: {
    top: 698,
    left: 32,
    width: 127,
  },
  voiceCommand: {
    top: 735,
    left: 161,
    width: 119,
    height: 43,
    color: Color.gray_200,
    lineHeight: 25,
    fontSize: FontSize.size_xl,
  },
  turnOnoff: {
    left: 160,
    top: 463,
  },
  frameIcon: {
    top: 506,
    left: 166,
    width: 107,
    height: 60,
    borderRadius: Border.br_16xl,
    position: "absolute",
  },
  rectangleView: {
    left: -1,
    borderTopRightRadius: Border.br_9981xl,
    borderBottomRightRadius: Border.br_9981xl,
    backgroundColor: Color.vertBleu,
    width: 1,
    top: 0,
    position: "absolute",
    height: 932,
  },
  image3Icon: {
    width: 34,
    height: 35,
  },
  ellipseParent: {
    top: 665,
    left: 190,
    justifyContent: "flex-end",
    alignItems: "center",
    width: 62,
    position: "absolute",
  },
  frameItem: {
    backgroundColor: Color.goldenrod,
  },
  text: {
    color: Color.black,
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  frameView: {
    top: 610,
    height: 90,
    width: 62,
    left: 32,
    position: "absolute",
  },
  frameInner: {
    backgroundColor: Color.tomato_100,
  },
  text1: {
    color: Color.gray_100,
  },
  rectangleGroup: {
    top: 752,
    left: 14,
  },
  channel: {
    top: 704,
    left: 284,
  },
  rectangleContainer: {
    top: 614,
    left: 283,
  },
  rectangleParent1: {
    top: 756,
    left: 287,
  },
  television: {
    backgroundColor: Color.c2,
    flex: 1,
    overflow: "hidden",
    height: 932,
    width: "100%",
    borderRadius: Border.br_5xl,
  },
});

export default Television;
