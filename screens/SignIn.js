import * as React from "react";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    Pressable,
    ScrollView,
    Fragment,
    SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const SignIn = () => {
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={{height: '100%'}}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.projectName}>{`House`}</Text>

                <Image style={styles.logo} source={require('../assets/logo.png')} resizeMode='contain'></Image>

                <View style={styles.form}>
                    <Text style={styles.formTitle}>{`LOGIN`}</Text>
                    <TextInput style={styles.formInput} placeholder='Username'/>
                    <TextInput style={styles.formInput} placeholder='Password' secureTextEntry={true}/>
                    <Pressable style={styles.formButton} onPress={navigation.navigate('Home')}>
                        <Text style={styles.formButtonText}>{`Sign In`}</Text>
                    </Pressable>
                </View>

                <Pressable style={styles.forgotButton}>
                    <Text style={styles.forgotButtonText}>{`Forgotten password?`}</Text>
                </Pressable>
            </SafeAreaView>
        </ScrollView>
    );
};

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'space-between',
        backgroundColor: Color.c2,
        height: '100%',
        width: "auto",
    },

    projectName: {
        fontSize: 64,
        fontWeight: "600",
        fontFamily: FontFamily.museoModernoSemibold,
        color: Color.buse,
    },

    logo: {
        width: '80%',
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
    },

    formTitle: {
        fontFamily: FontFamily.latoBold,
        fontWeight: "700",
        alignSelf: 'flex-start',
        fontSize: 40,
        color: Color.buse,
        marginBottom: 10,
    },

    formInput: {
        height: 50,
        width: '100%',
        borderColor: Color.buse,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        paddingLeft: 15,
        marginBottom: 10,
    },

    formButton: {
        height: 50,
        width: '100%',
        backgroundColor: Color.buse,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    formButtonText: {
        fontFamily: FontFamily.latoBold,
        color: '#fff',
        fontSize: 18,
        fontWeight: '800',
    },

    forgotButton: {
        padding: 20
    },

    forgotButtonText: {
        color: Color.buse,
        fontSize: 14,
        textDecorationLine: 'underline',
    },
});

export default SignIn;
