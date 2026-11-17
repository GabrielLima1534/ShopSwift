import { ContainerCategory, Scroll, TextHighlight, TextTitle } from "./style"
import { CardCategory } from "./CardCategory"
import iconTenis from '../../assets/iconTenis.png'
import iconEletronicos from '../../assets/iconEletronicos.png'
import iconCamisetas from '../../assets/iconCamisetas.png'
import iconJogos from '../../assets/iconJogos.png'
import iconEletrodomesticos from '../../assets/iconEletrodomesticos.png'

export const CategorySection = ({ onSelectCategory }) => {
    return(
        <ContainerCategory>
            <TextTitle>Nossas <TextHighlight>Categorias</TextHighlight></TextTitle>
            
            <Scroll horizontal showsHorizontalScrollIndicator={false}>
                <CardCategory image={iconTenis} name="Tênis" onPress={() => onSelectCategory("Tênis")}/>
                <CardCategory image={iconEletronicos} name="Eletrônicos" onPress={() => onSelectCategory("Eletrônicos")}/>
                <CardCategory image={iconCamisetas} name="Camisetas" onPress={() => onSelectCategory("Camisetas")}/>
                <CardCategory image={iconJogos} name="Jogos" onPress={() => onSelectCategory("Jogos")}/>
                <CardCategory image={iconEletrodomesticos} name="Eletrodomésticos" onPress={() => onSelectCategory("Eletrodomésticos")}/>
            </Scroll>

        </ContainerCategory>
    )
}