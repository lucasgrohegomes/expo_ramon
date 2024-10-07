import {useState, useRef} from 'react'
import {View, StyleSheet, Text, Image, Button } from 'react-native'
import {CameraView, useCameraPermissions} from 'expo-camera'

export default function Camera(){
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)

    if(!permissao){
        return <View></View>
    }

    if (!permissao.granted){
        return(
            <View style={styles.container}>
                <Text style={styles.textopermissao}>Você precisa da permissao para utilizar a camera</Text>
                <Button
                title='pedir permissão'
                onPress={pedirPermissao}
                />
            </View>
        )
    }
    const tirarFoto = async () => {
        const foto = await cameraRef.current?.takePictureAsync({
            qualiy: 0.5,
            base64: true
        })
        setFoto(foto)
        console.log(foto)
    }

    return(
        <CameraView style={styles.camera} facing={'back'} ref={cameraRef}>
            <View style={styles.buttonContainer}>
                <Button
                title= 'tirar-foto'
                onPress={tirarFoto}
                />
            </View>
        </CameraView>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },

    textopermissao:{
        textAlign:'center'
    },
    camera:{
        flex:1,
    },
    buttonContainer:{
        flex:1
    }
})