import { Image } from "react-native"
import { BoxCategory, TextCategory } from "./style"

export const CardCategory = ({ image, name, onPress }) => {
    return (
        <BoxCategory onPress={onPress}>
            <Image source={image} />
            <TextCategory>{name}</TextCategory>
        </BoxCategory>
    )
}