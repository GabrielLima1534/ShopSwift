import { Image } from "react-native"
import { BoxProducts, ContainerPrice, ProductImage, ProductPrice, ProductsDescription, ProductTitle } from "./style"
import iconAdd from '../../../assets/iconAdd.png'

export const CardProducs = ({ image, name, price, onPress }) => {
    return (
        <BoxProducts onPress={onPress}>
            <ProductImage source={image} />
        
            <ProductsDescription>
                <ProductTitle>{name}</ProductTitle>
                <ContainerPrice>
                    <ProductPrice>R${price}</ProductPrice>
                    <Image source={iconAdd} />
                </ContainerPrice>
            </ProductsDescription>
        </BoxProducts>
    )
}