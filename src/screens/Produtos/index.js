import { ScrollView, Image, Text, View, TextInput, Pressable } from 'react-native'
import { ContainerProdutos, InputContainer, InputSearch, styles } from './style'
import logo from '../../assets/logoShopSwift.png'

export const Produtos = () => {
    return(

            <ScrollView>

                <ContainerProducts>
                    <Image source={Logo} />
                    <InputContainer>
                        <InputSearch>                   
                          
                            <Pressable>
                                <Image source={iconFilter}/>
                            </Pressable>
                        </InputSearch>
                    </InputContainer>


                    <ProductsSection/>
                </ContainerProducts>

            </ScrollView>
        
    )
}