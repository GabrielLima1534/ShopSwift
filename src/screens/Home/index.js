import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, HighlightsSection, Scroll, TextHighlight, TitleHighlight } from "./style";
import logo from "../../assets/logoShopSwift.png";
import destaque1 from "../../assets/destaque1.png";
import destaque2 from "../../assets/destaque2.png";
import destaque3 from "../../assets/destaque3.png";
import { CategorySection } from "../../components/CategorySection";
import { ProductsSection } from "../../components/ProductsSection";

export const Home = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Container>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: 20,
              zIndex: 10,
            }}
          >
            <Image source={logo} />

            <TouchableOpacity
              onPress={() => navigation.replace("Login")}
              activeOpacity={0.6}
              hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
              style={{
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 7,
                borderWidth: 1,
                borderColor: "#375EE7",
              }}
            >
              <Text style={{ color: "#375EE7", fontWeight: "700" }}>Sair</Text>
            </TouchableOpacity>
          </View>

          <HighlightsSection>
            <TitleHighlight>
              Nossos <TextHighlight>Destaques</TextHighlight>
            </TitleHighlight>

            <Scroll horizontal showsHorizontalScrollIndicator={false}>
              <Image source={destaque1} />
              <Image source={destaque2} />
              <Image source={destaque3} />
            </Scroll>
          </HighlightsSection>

          <CategorySection onSelectCategory={handleSelectCategory} />

          <ProductsSection selectedCategory={selectedCategory} />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};