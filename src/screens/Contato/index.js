import { Pressable } from "react-native"
import { TextInput } from "react-native/types_generated/index"
import { View } from "react-native/types_generated/index"
import { ContainerContact } from "./style"

export const Contato = () => {

    return(
         <View>
      <Image source={logo} />

      <View>
        <MapContainer>
        <MessageText>Venha nos <TextHighlight>Visitar</TextHighlight></MessageText>
          <MapsImage source={maps} />
        </MapContainer>
      </View>

      <ContainerForm>
        <Text>Mande uma <TextHighlight>mensagem</TextHighlight></Text>

        <View>
          <Text>Nome:</Text>
          <TextInput />
        </View>

        <View>
          <Text>Email:</Text>
          <TextInput />
        </View>

        <View>
          <Text>Mensagem:</Text>
          <TextInput />
        </View>

        <Pressable>
            <Text>Enviar</Text>
        </Pressable>
      </ContainerForm>
    </View>
    )

}