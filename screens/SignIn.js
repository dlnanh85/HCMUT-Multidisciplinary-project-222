import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signIn, styles.signLayout1]}>
      <Image
        style={[
          styles.theBialons36bWo8ycmsUnsplaIcon,
          styles.signInChildPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/thebialons36bwo8ycmsunsplash-1.png")}
      />
      <Image
        style={[
          styles.signInChild,
          styles.signInChildPosition,
          styles.signLayout1,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Text style={[styles.home, styles.homeFlexBox]}>{`Home.
`}</Text>
      <View style={[styles.signInItem, styles.signLayout]} />
      <View style={[styles.signInInner, styles.signLayout]} />
      <Text style={[styles.username, styles.buttonTypo, styles.usernameTypo]}>
        Username
      </Text>
      <Text style={[styles.password, styles.buttonTypo, styles.usernameTypo]}>
        Password
      </Text>
      <Pressable
        style={styles.signIn1}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={[styles.signIn2, styles.buttonTypo]}>Sign In</Text>
        <View style={styles.buttoncontainedTextAndIco}>
          <View style={styles.containedTextAndIcon}>
            <View style={styles.content}>
              <Text style={[styles.button, styles.buttonTypo]}>SIGN IN</Text>
            </View>
          </View>
        </View>
      </Pressable>
      <Text style={styles.forgottonYourPassword}>Forgotten password?</Text>
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
      <Text style={[styles.login, styles.homeFlexBox]}>LOGIN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signLayout1: {
    height: 932,
    borderRadius: Border.br_5xl,
  },
  signInChildPosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  homeFlexBox: {
    textAlign: "center",
    color: Color.buse,
    position: "absolute",
  },
  signLayout: {
    height: 71,
    width: 327,
    borderWidth: 3,
    borderColor: "#1580c2",
    borderStyle: "solid",
    position: "absolute",
    borderRadius: Border.br_5xl,
  },
  buttonTypo: {
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textAlign: "left",
  },
  usernameTypo: {
    fontSize: FontSize.size_xl,
    left: 70,
    fontWeight: "700",
    color: Color.buse,
    position: "absolute",
  },
  theBialons36bWo8ycmsUnsplaIcon: {
    top: 0,
    height: 927,
  },
  signInChild: {
    top: -31,
    opacity: 0.4,
  },
  home: {
    top: 36,
    left: 125,
    fontSize: 64,
    fontWeight: "600",
    fontFamily: FontFamily.museoModernoSemibold,
  },
  signInItem: {
    top: 552,
    left: 52,
  },
  signInInner: {
    top: 638,
    left: 53,
  },
  username: {
    top: 575,
    textAlign: "left",
  },
  password: {
    top: 661,
    textAlign: "left",
  },
  signIn2: {
    height: "63.04%",
    width: "22.02%",
    top: "19.57%",
    left: "38.84%",
    fontSize: FontSize.size_5xl,
    color: Color.f9,
    textAlign: "left",
    position: "absolute",
  },
  button: {
    fontSize: FontSize.size_13xl,
    letterSpacing: 0,
    lineHeight: 24,
    textTransform: "uppercase",
    color: Color.white,
    textAlign: "left",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  containedTextAndIcon: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    overflow: "hidden",
  },
  buttoncontainedTextAndIco: {
    height: "85.71%",
    marginLeft: -76.5,
    top: "7.14%",
    bottom: "7.14%",
    left: "50%",
    borderRadius: 4,
    backgroundColor: Color.buse,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  signIn1: {
    height: "6.01%",
    width: "76.05%",
    top: "79.4%",
    right: "11.86%",
    bottom: "14.59%",
    left: "12.09%",
    backgroundColor: Color.white,
    position: "absolute",
    borderRadius: Border.br_5xl,
  },
  forgottonYourPassword: {
    top: 807,
    left: 160,
    fontSize: FontSize.size_xs,
    textDecoration: "underline",
    fontFamily: FontFamily.latoRegular,
    color: Color.vertBleu,
    textAlign: "left",
    position: "absolute",
  },
  logoIcon: {
    top: 190,
    left: 90,
    width: 252,
    height: 245,
    position: "absolute",
  },
  login: {
    top: 502,
    left: 33,
    fontSize: FontSize.size_17xl,
    fontWeight: "800",
    fontFamily: FontFamily.latoExtrabold,
    width: 166,
    height: 39,
  },
  signIn: {
    backgroundColor: Color.c2,
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
});

export default SignIn;
