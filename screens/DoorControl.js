import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const DoorControl = () => {
  return (
    <View style={styles.doorControl}>
      <View style={styles.doorControlChild} />
      <Image
        style={styles.doorIcon104221}
        resizeMode="cover"
        source={require("../assets/dooricon10422-1.png")}
      />
      <Image
        style={styles.backButtonIcon}
        resizeMode="cover"
        source={require("../assets/back-button.png")}
      />
      <Image
        style={[styles.doorControlItem, styles.doorLayout1]}
        resizeMode="cover"
        source={require("../assets/rectangle-93.png")}
      />
      <View
        style={[styles.doorControlInner, styles.doorLayout, styles.doorLayout1]}
      />
      <View style={styles.rectangleView} />
      <View style={[styles.doorControlChild1, styles.doorLayout]} />
      <Text style={[styles.lockunlock, styles.statusLogTypo]}>LOCK/UNLOCK</Text>
      <Text style={[styles.statusLog, styles.statusLogTypo]}>STATUS LOG</Text>
      <Text style={[styles.text, styles.unlockTypo]}>{`14:00 12/3/2023
13:00 12/3/2023
12:00 12/3/2023
10:00 12/3/2023
10:00 12/3/2023
9:00 12/3/2023
9:00 12/3/2023
8:00 12/3/2023`}</Text>
      <Text style={[styles.unlockLockUnlockContainer, styles.unlockTypo]}>
        <Text style={styles.unlock}>{`UNLOCK
`}</Text>
        <Text style={styles.lock}>{`LOCK
`}</Text>
        <Text style={styles.unlock1}>{`UNLOCK
`}</Text>
        <Text style={styles.lock}>{`LOCK
`}</Text>
        <Text style={styles.unlock1}>{`UNLOCK
`}</Text>
        <Text style={styles.lock}>{`LOCK
`}</Text>
        <Text style={styles.unlock1}>{`UNLOCK
`}</Text>
        <Text style={styles.lock}>LOCK</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  doorLayout1: {
    width: 369,
    left: 30,
  },
  doorLayout: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  statusLogTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.latoExtrabold,
    fontWeight: "800",
    lineHeight: 44,
    fontSize: FontSize.size_17xl,
    position: "absolute",
  },
  unlockTypo: {
    height: 383,
    textAlign: "left",
    fontFamily: FontFamily.latoRegular,
    lineHeight: 25,
    fontSize: FontSize.size_xl,
    top: 466,
    position: "absolute",
  },
  doorControlChild: {
    top: -30,
    left: -128,
    width: 603,
    height: 259,
    backgroundColor: Color.wheat,
    position: "absolute",
  },
  doorIcon104221: {
    top: 43,
    left: 281,
    borderRadius: 32,
    width: 118,
    height: 113,
    position: "absolute",
  },
  backButtonIcon: {
    top: 44,
    left: 32,
    width: 24,
    height: 34,
    position: "absolute",
  },
  doorControlItem: {
    top: 247,
    height: 104,
    position: "absolute",
    borderRadius: Border.br_5xl,
  },
  doorControlInner: {
    top: 388,
    backgroundColor: Color.goldenrod,
    height: 492,
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
  doorControlChild1: {
    top: 452,
    left: 53,
    width: 323,
    height: 408,
    backgroundColor: Color.wheat,
  },
  lockunlock: {
    top: 256,
    left: 64,
    color: Color.white,
    width: 306,
    height: 79,
  },
  statusLog: {
    top: 406,
    left: 78,
    color: Color.buse,
    width: 273,
    height: 36,
  },
  text: {
    left: 84,
    color: Color.black,
    width: 163,
  },
  unlock: {
    color: "#00ce8e",
  },
  lock: {
    color: Color.orangered,
  },
  unlock1: {
    color: Color.mediumseagreen_100,
  },
  unlockLockUnlockContainer: {
    left: 271,
    width: 96,
  },
  doorControl: {
    backgroundColor: Color.c2,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 932,
    borderRadius: Border.br_5xl,
  },
});

export default DoorControl;
