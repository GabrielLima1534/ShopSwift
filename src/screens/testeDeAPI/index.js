import { useState} from 'react'
import { Pressable, Text, View } from 'react-native'

export const Home = () => {
    
    const[personagens, setPersonagens] = useState([])

    const buscarDados = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setPersonagens(data.results)
    }
    
    return(
        <View>
            <Pressable onPress={buscarDados}>
                <Text>Mostrar personagens</Text>
            </Pressable>

            {personagens.map((Personagem) => (
                <Text>
                    {Personagem.name}
                </Text>
            ))}

        </View>
    )
}
