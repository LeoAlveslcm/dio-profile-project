import React from "react"
import {View, Image, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from "react-native";

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/106628674?v=4';
const urlToMyGithub = 'https://github.com/LeoAlveslcm';

const App = () => {

    const handlePressGoToGithub = async () => {
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res) {
            await Linking.openURL(urlToMyGithub);
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
            <View style={style.content}>
                <Image 
                accessibilityLabel="Foto de Leonardo em uma praia" 
                style={style.avatar} 
                source={{uri: imageProfileGithub}}
                />
                <Text 
                accessibilityLabel="Nome: Leonardo Alves" 
                style={[style.defaultText, style.name]}>Leonardo Alves
                </Text>
                <Text 
                accessibilityLabel="Nickname: Leo Alves lcm" 
                style={[style.defaultText, style.nickname]}>leoalveslcm
                </Text>
                <Text 
                accessibilityLabel="Descrição: Recém descoberto amante de programação. Cursei 3 anos de Engenharia Química até cair na real que meu destino é programar." 
                style={[style.defaultText, style.description]}>Recém descoberto amante de programação. Cursei 3 anos de Engenharia Química até cair na real que meu destino é programar.
                </Text>

                <View style={style.section}>
                    <View style={style.sectionLeo}>
                    <Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text>
                    </View>
                    <View style={style.sectionLeo}>
                    <Text style={style.box}> </Text><Text style={style.boxLight}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.boxLight}> </Text><Text style={style.boxLight}> </Text><Text style={style.boxLight}> </Text><Text style={style.box}> </Text><Text style={style.boxLight}> </Text><Text style={style.boxLight}> </Text><Text style={style.boxLight}> </Text><Text style={style.box}> </Text>
                    </View>
                    <View style={style.sectionLeo}>
                    <Text style={style.box}> </Text><Text style={style.boxLight}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.boxLight}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.boxLight}> </Text><Text style={style.box}> </Text><Text style={style.boxLight}> </Text><Text style={style.box}> </Text>
                    </View>
                    <View style={style.sectionLeo}>
                    <Text style={style.box}> </Text><Text style={style.boxLight}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.boxLight}> </Text><Text style={style.boxLight}> </Text><Text style={style.boxLight}> </Text><Text style={style.box}> </Text><Text style={style.boxLight}> </Text><Text style={style.box}> </Text><Text style={style.boxLight}> </Text><Text style={style.box}> </Text>
                    </View>
                    <View style={style.sectionLeo}>
                    <Text style={style.box}> </Text><Text style={style.boxLight}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.boxLight}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.boxLight}> </Text><Text style={style.box}> </Text><Text style={style.boxLight}> </Text><Text style={style.box}> </Text>
                    </View>
                    <View style={style.sectionLeo}>
                    <Text style={style.box}> </Text><Text style={style.boxLight}> </Text><Text style={style.boxLight}> </Text><Text style={style.boxLight}> </Text><Text style={style.box}> </Text><Text style={style.boxLight}> </Text><Text style={style.boxLight}> </Text><Text style={style.boxLight}> </Text><Text style={style.box}> </Text><Text style={style.boxLight}> </Text><Text style={style.boxLight}> </Text><Text style={style.boxLight}> </Text><Text style={style.box}> </Text>
                    </View>
                    <View style={style.sectionLeo}>
                    <Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text><Text style={style.box}> </Text>
                    </View>
                </View>

                <Pressable onPress={handlePressGoToGithub}>    
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open in Github Web</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: { // por padrão as "divs = View" são alinhadas em colunas.
        backgroundColor: colorGithub,
        flex: 1, // Expandir para a tela inteira.
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    content: {
        alignItems: 'center',
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',
        width: 300,
        textAlign: "center",
        padding: 10,
    },
    button: {
        marginTop: 20,
        backgroundColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray', 
        padding: 10,
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    box: {
        marginLeft: 2,
        width: 15,
        height: 15,
        borderRadius: 3,
        backgroundColor: 'green',
    },
    boxLight: {
        marginLeft: 2,
        width: 15,
        height: 15,
        borderRadius: 3,
        backgroundColor: 'lightgreen',
    },
    sectionLeo: {
        flexDirection: "row",
        justifyContent: 'center',
        padding: 1,
    }, 
    section: {
        padding: 1,
        width: 600,
    },
});