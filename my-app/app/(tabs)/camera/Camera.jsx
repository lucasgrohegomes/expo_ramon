import {useState, useRef} from 'react'
import {View, StyleSheet, Text, Image, Pressable, SafeAreaView } from 'react-native'
import {CameraView, useCameraPermissions} from 'expo-camera'
import * as MediaLibrary from 'expo-media-library';
import * as Linking from 'expo-linking'

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Camera(){
    const [permissaoCamera, pedirPermissaoCamera] = useCameraPermissions()
    const [permissaoSalvar, pedirPermissaoSalvar] = MediaLibrary.usePermissions()
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)
    const [ladoCamera, setLadoCamera] = useState('back')

    if(!permissaoCamera && !permissaoSalvar || permissaoCamera === null || permissaoSalvar === null){
        return <View></View>
    }

    if (!permissaoCamera.granted){
        return(
            <View style={styles.questioncontainer}>
                <Text style={styles.textopermissao}>Você precisa da permissao para utilizar a camera</Text>
                <Pressable title='pedir permissão para a camera' onPress={pedirPermissaoCamera}>
                    <Ionicons name="camera" size={80} color="black" /></Pressable>
            </View>
        )
    }

    if (!permissaoSalvar.granted){
        return(
            <View style={styles.questioncontainer}>
                <Text style={styles.textopermissao}>Você precisa da permissao para salvar imagens</Text>
                <Pressable title='pedir permissão para salvar fotos' onPress={pedirPermissaoSalvar}><Ionicons name="images" size={80} color="black" /></Pressable>
            </View>
        )
    }

    const inverterLadoCamera = () => {
        setLadoCamera(ladoCamera == 'back' ? 'front' : 'back')
    }

    const tirarFoto = async () => {
        const foto = await cameraRef.current?.takePictureAsync({
            qualiy: 0.5,
            base64: true
        })
        setFoto(foto)
        console.log(foto)
        
    }

    const salvarFoto = async () => {
        MediaLibrary.saveToLibraryAsync(foto.uri)
        if(!permissaoSalvar.status == 'granted'){
            await permissaoSalvar
        }
        return(
            alert('Foto salva com sucesso!')
        )
    }

    const EntrarLinkQR = async (url) => {
        Linking.openURL(url.data)
    }

    return(
        <SafeAreaView style={styles.container}>
            {foto ?
                <>
                <View style={styles.container}>
                    <Image style={styles.image} source={{uri: foto.uri}} />
                </View>
                <View style={styles.buttoncontainer}>
                        <Pressable title='salvar foto' onPress={salvarFoto}>
                            <Ionicons name="checkmark" size={40} color="black" /></Pressable>
                        <Pressable title='descartar imagem' onPress={()=> setFoto(null)}>
                            <Ionicons name="close" size={40} color="black" /></Pressable>
                </View>
                </>
                    
                 : <></>}

        <CameraView style={styles.camera} facing={ladoCamera} ref={cameraRef}
            barcodeScannerSettings={{
                barcodeTypes: ["qr"],
            }} onBarcodeScanned={(url) => EntrarLinkQR(url)}>

            <View style={styles.buttoncontainer}>
                <Pressable title= 'tirar-foto' onPress={tirarFoto}>
                    <Ionicons name="camera" size={40} color="white" /></Pressable>
                <Pressable title= 'inverter-lado' onPress={inverterLadoCamera}>
                    <Ionicons name="camera-reverse-sharp" size={40} color="white" /></Pressable>
            </View>
            
        </CameraView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },

    questioncontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

    textopermissao:{
        textAlign:'center',
    },

    camera:{
        flex:1,
    },

    buttoncontainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end'
    },

    image:{
        width:'100%',
        height:'100%'
    }
})