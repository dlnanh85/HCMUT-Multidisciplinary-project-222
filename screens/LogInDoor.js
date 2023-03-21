import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const LogInDoor = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logInDoor}>
      <Text
        style={[styles.enterDoorPassword, styles.textFlexBox, styles.textTypo]}
      >
        Enter Door Password
      </Text>
      <Image
        style={[styles.backButtonIcon, styles.textLayout]}
        resizeMode="cover"
        source={require("../assets/back-button.png")}
      />
      <Image
        style={styles.logInDoorChild}
        resizeMode="cover"
        source={require("../assets/rectangle-104.png")}
      />
      <Pressable
        style={styles.logInDoorItem}
        onPress={() => navigation.navigate("DoorControl")}
      />
      <Text
        style={[
          styles.text,
          styles.textLayout,
          styles.textFlexBox,
          styles.textTypo,
        ]}
      >
        **********
      </Text>
      <View
        style={[
          styles.ellipseParent,
          styles.groupLayout,
          styles.ellipsePosition,
        ]}
      >
        <Image
          style={[
            styles.groupChild,
            styles.groupChildPosition,
            styles.groupLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-30.png")}
        />
        <Text style={[styles.text1, styles.textFlexBox]}>1</Text>
      </View>
      <View
        style={[
          styles.ellipseGroup,
          styles.groupLayout,
          styles.ellipsePosition,
        ]}
      >
        <Image
          style={[
            styles.groupChild,
            styles.groupChildPosition,
            styles.groupLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-30.png")}
        />
        <Text style={[styles.text1, styles.textFlexBox]}>2</Text>
      </View>
      <View
        style={[
          styles.ellipseContainer,
          styles.groupLayout,
          styles.ellipsePosition,
        ]}
      >
        <Image
          style={[
            styles.groupChild,
            styles.groupChildPosition,
            styles.groupLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-30.png")}
        />
        <Text style={[styles.text1, styles.textFlexBox]}>3</Text>
      </View>
      <View style={[styles.groupView, styles.ellipseParentPosition2]}>
        <Image
          style={[
            styles.groupChild,
            styles.groupChildPosition,
            styles.groupLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-30.png")}
        />
        <Text style={[styles.text1, styles.textFlexBox]}>6</Text>
      </View>
      <View style={[styles.ellipseParent1, styles.ellipseParentPosition2]}>
        <Image
          style={[
            styles.groupChild,
            styles.groupChildPosition,
            styles.groupLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-30.png")}
        />
        <Text style={[styles.text1, styles.textFlexBox]}>5</Text>
      </View>
      <View style={[styles.ellipseParent2, styles.ellipseParentPosition2]}>
        <Image
          style={[
            styles.groupChild,
            styles.groupChildPosition,
            styles.groupLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-30.png")}
        />
        <Text style={[styles.text1, styles.textFlexBox]}>4</Text>
      </View>
      <View style={[styles.ellipseParent3, styles.ellipseParentPosition1]}>
        <Image
          style={[
            styles.groupChild,
            styles.groupChildPosition,
            styles.groupLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-30.png")}
        />
        <Text style={[styles.text1, styles.textFlexBox]}>7</Text>
      </View>
      <View style={[styles.ellipseParent4, styles.ellipseParentPosition1]}>
        <Image
          style={[
            styles.groupChild,
            styles.groupChildPosition,
            styles.groupLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-30.png")}
        />
        <Text style={[styles.text1, styles.textFlexBox]}>8</Text>
      </View>
      <View style={[styles.ellipseParent5, styles.ellipseParentPosition1]}>
        <Image
          style={[
            styles.groupChild,
            styles.groupChildPosition,
            styles.groupLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-30.png")}
        />
        <Text style={[styles.text1, styles.textFlexBox]}>9</Text>
      </View>
      <View style={[styles.ellipseParent6, styles.ellipseParentPosition]}>
        <Image
          style={[
            styles.groupChild,
            styles.groupChildPosition,
            styles.groupLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-30.png")}
        />
        <Text style={[styles.text1, styles.textFlexBox]}>#</Text>
      </View>
      <View style={[styles.ellipseParent7, styles.ellipseParentPosition]}>
        <Image
          style={[
            styles.groupChild,
            styles.groupChildPosition,
            styles.groupLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-30.png")}
        />
        <Text style={[styles.text1, styles.textFlexBox]}>0</Text>
      </View>
      <View style={[styles.ellipseParent8, styles.ellipseParentPosition]}>
        <Image
          style={[
            styles.groupChild,
            styles.groupChildPosition,
            styles.groupLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-30.png")}
        />
        <Text style={[styles.text1, styles.textFlexBox]}>*</Text>
      </View>
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo1.png")}
      />
      <View style={[styles.logInDoorInner, styles.groupChildPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  textTypo: {
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_13xl,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  textLayout: {
    height: 34,
    position: "absolute",
  },
  groupLayout: {
    height: 70,
    width: 71,
  },
  ellipsePosition: {
    top: 477,
    width: 71,
    position: "absolute",
  },
  groupChildPosition: {
    top: 0,
    position: "absolute",
  },
  ellipseParentPosition2: {
    top: 578,
    height: 70,
    width: 71,
    position: "absolute",
  },
  ellipseParentPosition1: {
    top: 682,
    height: 70,
    width: 71,
    position: "absolute",
  },
  ellipseParentPosition: {
    top: 786,
    height: 70,
    width: 71,
    position: "absolute",
  },
  enterDoorPassword: {
    top: 289,
    left: 41,
    color: Color.vertBleu,
    width: 349,
    height: 66,
    position: "absolute",
  },
  backButtonIcon: {
    top: 44,
    left: 32,
    width: 24,
  },
  logInDoorChild: {
    top: 372,
    left: 89,
    width: 251,
    height: 57,
    position: "absolute",
  },
  logInDoorItem: {
    top: 377,
    left: 70,
    backgroundColor: Color.goldenrod,
    borderStyle: "solid",
    borderColor: "#ee4239",
    borderWidth: 6,
    width: 290,
    height: 46,
    position: "absolute",
    borderRadius: Border.br_5xl,
  },
  text: {
    top: 389,
    left: 90,
    color: "#635a5a",
    width: 250,
  },
  groupChild: {
    left: 0,
  },
  text1: {
    top: 9,
    left: 10,
    fontSize: FontSize.size_17xl,
    lineHeight: 44,
    fontWeight: "800",
    fontFamily: FontFamily.latoExtrabold,
    color: Color.tomato_200,
    width: 52,
    height: 52,
    position: "absolute",
  },
  ellipseParent: {
    left: 75,
  },
  ellipseGroup: {
    left: 179,
  },
  ellipseContainer: {
    left: 283,
  },
  groupView: {
    left: 283,
  },
  ellipseParent1: {
    left: 179,
  },
  ellipseParent2: {
    left: 75,
  },
  ellipseParent3: {
    left: 75,
  },
  ellipseParent4: {
    left: 179,
  },
  ellipseParent5: {
    left: 283,
  },
  ellipseParent6: {
    left: 283,
  },
  ellipseParent7: {
    left: 179,
  },
  ellipseParent8: {
    left: 75,
  },
  logoIcon: {
    top: 109,
    left: 133,
    width: 164,
    height: 159,
    position: "absolute",
  },
  logInDoorInner: {
    left: -1,
    borderTopRightRadius: Border.br_9981xl,
    borderBottomRightRadius: Border.br_9981xl,
    backgroundColor: Color.vertBleu,
    width: 1,
    height: 932,
  },
  logInDoor: {
    backgroundColor: Color.c2,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 932,
    borderRadius: Border.br_5xl,
  },
});

export default LogInDoor;
