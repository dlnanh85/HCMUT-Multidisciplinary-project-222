import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Camera1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.camera}>
      <View style={styles.cameraChild} />
      <Image
        style={styles.wrapperPosition}
        resizeMode="cover"
        source={require("../assets/back-button.png")}
      />
      <Pressable
        style={styles.wrapperPosition}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/back-button.png")}
        />
      </Pressable>
      <Image
        style={[
          styles.cameraInner,
          styles.cam7Layout,
          styles.cameraInnerPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-971.png")}
      />
      <Image
        style={[
          styles.rectangleIcon,
          styles.cam7Layout,
          styles.cameraInnerPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-98.png")}
      />
      <Image
        style={[styles.cam5Icon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/cam-5.png")}
      />
      <Image
        style={[styles.cam4Icon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/cam-4.png")}
      />
      <Image
        style={[styles.cam3Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/cam-3.png")}
      />
      <View style={[styles.cam7, styles.cam7Layout]} />
      <Image
        style={[styles.cam2Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/cam-2.png")}
      />
      <View style={[styles.cam2Info, styles.infoLayout]}>
        <View style={[styles.cam2InfoChild, styles.childPosition]} />
        <Text style={[styles.stair, styles.textFlexBox]}>STAIR</Text>
        <Text style={[styles.text, styles.textFlexBox]}>{`16:12:12
29/02/2023`}</Text>
      </View>
      <View style={[styles.cam2Info1, styles.cam2Position1]}>
        <View style={[styles.cam2InfoChild, styles.childPosition]} />
        <Text style={[styles.stair, styles.textFlexBox]}>OUTDOOR</Text>
        <Text style={[styles.text, styles.textFlexBox]}>{`16:12:12
29/02/2023`}</Text>
      </View>
      <View style={[styles.cam2Info2, styles.cam2Position1]}>
        <View style={[styles.cam2InfoChild, styles.childPosition]} />
        <Text style={[styles.stair, styles.textFlexBox]}>BATHROOM HALL</Text>
        <Text style={[styles.text, styles.textFlexBox]}>{`16:12:12
29/02/2023`}</Text>
      </View>
      <View style={[styles.cam2Info3, styles.cam2Position]}>
        <View style={[styles.cam2InfoChild, styles.childPosition]} />
        <Text style={[styles.stair, styles.textFlexBox]}>MAIN HALL</Text>
        <Text style={[styles.text, styles.textFlexBox]}>{`16:12:12
29/02/2023`}</Text>
      </View>
      <View style={[styles.cam2Info3, styles.cam2Position]}>
        <View style={[styles.cam2InfoChild, styles.childPosition]} />
        <Text style={[styles.stair, styles.textFlexBox]}>MAIN HALL</Text>
        <Text style={[styles.text, styles.textFlexBox]}>{`16:12:12
29/02/2023`}</Text>
      </View>
      <Image
        style={[styles.cam2Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/cam-2.png")}
      />
      <View style={[styles.cam2Info3, styles.cam2Position]}>
        <View style={[styles.cam2InfoChild, styles.childPosition]} />
        <Text style={[styles.stair, styles.textFlexBox]}>MAIN HALL</Text>
        <Text style={[styles.text, styles.textFlexBox]}>{`16:12:12
29/02/2023`}</Text>
      </View>
      <View style={[styles.cam2Info6, styles.cam2Position]}>
        <View style={[styles.cam2InfoChild, styles.childPosition]} />
        <Text style={[styles.stair, styles.textFlexBox]}>WARDROBE</Text>
        <Text style={[styles.text, styles.textFlexBox]}>{`16:12:12
29/02/2023`}</Text>
      </View>
      <View style={[styles.camInfo, styles.infoLayout]}>
        <View style={[styles.cam2InfoChild, styles.childPosition]} />
        <Text style={[styles.stair, styles.textFlexBox]}>LIVING ROOM</Text>
        <Text style={[styles.text, styles.textFlexBox]}>{`16:12:12
29/02/2023`}</Text>
      </View>
      <Image
        style={[styles.image6Icon, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/image-6.png")}
      />
      <Text style={styles.camera1}>Camera</Text>
      <View style={[styles.cameraChild1, styles.childPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  cam7Layout: {
    height: 184,
    width: 184,
    position: "absolute",
  },
  cameraInnerPosition: {
    top: 131,
    width: 184,
  },
  iconPosition1: {
    top: 329,
    height: 184,
    width: 184,
    position: "absolute",
  },
  iconPosition: {
    top: 528,
    height: 184,
    width: 184,
    position: "absolute",
  },
  infoLayout: {
    height: 42,
    top: 278,
    width: 185,
    position: "absolute",
  },
  childPosition: {
    top: 0,
    position: "absolute",
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  cam2Position1: {
    top: 476,
    height: 42,
    width: 185,
    position: "absolute",
  },
  cam2Position: {
    top: 675,
    height: 42,
    width: 185,
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
  wrapperPosition: {
    height: 34,
    width: 24,
    left: 32,
    top: 44,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  cameraInner: {
    left: 22,
  },
  rectangleIcon: {
    left: 223,
  },
  cam5Icon: {
    left: 223,
  },
  cam4Icon: {
    left: 22,
  },
  cam3Icon: {
    left: 23,
  },
  cam7: {
    top: 731,
    left: 21,
  },
  cam2Icon: {
    left: 223,
  },
  cam2InfoChild: {
    left: 0,
    backgroundColor: Color.gainsboro,
    height: 37,
    width: 185,
    top: 0,
  },
  stair: {
    top: 7,
    left: 54,
    fontSize: FontSize.size_xs,
    lineHeight: 15,
    fontWeight: "800",
    fontFamily: FontFamily.latoExtrabold,
    textAlign: "center",
    justifyContent: "center",
    width: 77,
    height: 23,
    color: Color.vertBleu,
  },
  text: {
    top: 23,
    left: 145,
    fontSize: FontSize.size_8xs,
    lineHeight: 6,
    fontFamily: FontFamily.latoRegular,
    color: Color.black,
    textAlign: "right",
    width: 40,
    height: 19,
  },
  cam2Info: {
    left: 21,
  },
  cam2Info1: {
    left: 21,
  },
  cam2Info2: {
    left: 223,
  },
  cam2Info3: {
    left: 23,
  },
  cam2Info6: {
    left: 223,
  },
  camInfo: {
    left: 222,
  },
  image6Icon: {
    left: 150,
    width: 129,
    height: 86,
  },
  camera1: {
    top: 30,
    left: 284,
    fontSize: FontSize.size_17xl,
    lineHeight: 44,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    textAlign: "left",
    width: 234,
    height: 80,
    color: Color.vertBleu,
    position: "absolute",
  },
  cameraChild1: {
    left: -1,
    borderTopRightRadius: Border.br_9981xl,
    borderBottomRightRadius: Border.br_9981xl,
    backgroundColor: Color.vertBleu,
    width: 1,
    height: 932,
  },
  camera: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.c2,
    flex: 1,
    overflow: "hidden",
    height: 932,
    width: "100%",
  },
});

export default Camera1;
