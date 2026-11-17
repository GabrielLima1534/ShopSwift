import { useState } from 'react'
import { Image, Text, View, TextInput, Pressable, Alert } from 'react-native'
import { styles } from './style'
import logo from '../../assets/logoShopSwift.png'

export const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleLogin = () => {
        if (!email.trim() || !senha.trim()) {
            Alert.alert('Atenção', 'Preencha o e-mail e a senha para entrar.')
            return
        }

        // Vai para a tela Home
        navigation.navigate('Home')
    }

    return (
        <View style={styles.containerHome}>

            <Image source={logo} />

            <View style={styles.contentHome}>
                <Text style={styles.txtTitulo}>
                    Faça login e se <Text style={styles.txtHighlights}>surpreenda</Text>
                </Text>

                <View style={styles.containerForm}>
                    
                    <View style={styles.containerInputs}>
                        <View>
                            <Text>E-mail:</Text>
                            <TextInput
                                value={email}
                                onChangeText={setEmail}
                                keyboardType='email-address'
                                autoCapitalize='none'
                                placeholder='Digite seu e-mail'
                                style={styles.input}
                            />
                        </View>

                        <View>
                            <Text>Senha:</Text>
                            <TextInput
                                value={senha}
                                onChangeText={setSenha}
                                secureTextEntry={true}
                                placeholder='Digite sua senha'
                                style={styles.input}
                            />
                        </View>
                    </View>

                    <Pressable style={styles.buttonLogin} onPress={handleLogin}>
                        <Text style={styles.txtLogin}>Entrar</Text>
                    </Pressable>
                </View>

                <Text style={styles.txtNaoTemConta}>
                    Não tem uma conta?{' '}
                    <Text
                        style={styles.txtCriarConta}
                        onPress={() => navigation.navigate('Cadastro')}
                    >
                        Criar conta
                    </Text>
                </Text>
            </View>

        </View>
    )
}