import { Alert } from "react-native";
import { BoxProducts, ContainerProducts, TextHighlight, TextTitle } from "./style";
import { CardProducs } from "./CardProducts";
import imageProduct from "../../assets/imageProduct.png";

const listaProdutos = [
  {
    id: "1",
    name: "Tênis descolado do melhor corre...",
    price: "800,00",
    category: "Tênis",
    image: imageProduct,
  },
  {
    id: "2",
    name: "Fone Bluetooth Noise Cancelling",
    price: "350,00",
    category: "Eletrônicos",
    image: imageProduct,
  },
  {
    id: "3",
    name: "Camiseta Streetwear Oversized",
    price: "120,00",
    category: "Camisetas",
    image: imageProduct,
  },
  {
    id: "4",
    name: "Controle Sem Fio Pro",
    price: "450,00",
    category: "Jogos",
    image: imageProduct,
  },
];

export const ProductsSection = ({ selectedCategory }) => {
  // 1. Função de filtro: se houver categoria selecionada, filtra; senão, mostra todos
  const produtosFiltrados = selectedCategory
    ? listaProdutos.filter((item) => item.category === selectedCategory)
    : listaProdutos;

  // 2. Função ao clicar em um produto
  const handleSelectProduct = (produto) => {
    Alert.alert(
      produto.name,
      `Categoria: ${produto.category}\nPreço: R$ ${produto.price}`,
      [
        { text: "Fechar", style: "cancel" },
        { text: "Comprar", onPress: () => Alert.alert("Sucesso", "Produto adicionado ao carrinho!") },
      ]
    );
  };

  return (
    <BoxProducts>
      <TextTitle>
        {selectedCategory ? (
          selectedCategory
        ) : (
          <>
            Nossos <TextHighlight>Produtos</TextHighlight>
          </>
        )}
      </TextTitle>

      <ContainerProducts>
        {produtosFiltrados.map((produto) => (
          <CardProducs
            key={produto.id}
            image={produto.image}
            name={produto.name}
            price={produto.price}
            onPress={() => handleSelectProduct(produto)}
          />
        ))}
      </ContainerProducts>
    </BoxProducts>
  );
};