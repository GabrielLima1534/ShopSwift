import { useState } from "react";
import { Alert, Image, View } from "react-native";
import logo from "../../assets/logoShopSwift.png";
import {
  Container,
  ContentCadastro,
  CreateAccountButton,
  FormContainer,
  Input,
  InputsContainer,
  TextButton,
  TextHighlight,
  TextLabel,
  TextLogin,
  TextNavigation,
  TextTitle,
} from "./style";

export const Cadastro = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = () => {
    if (!email.trim() || !senha.trim()) {
      Alert.alert("Atenção", "Preencha e-mail e senha para criar sua conta.");
      return;
    }

    if (senha.length < 6) {
      Alert.alert("Senha curta", "A senha precisa ter pelo menos 6 caracteres.");
      return;
    }

    Alert.alert("Sucesso!", "Conta criada com sucesso.", [
      { text: "Ir para Login", onPress: () => navigation.navigate("Login") },
    ]);
  };

  return (
    <Container>
      <Image source={logo} />

      <ContentCadastro>
        <TextTitle>
          Crie uma conta <TextHighlight>e se surpreenda</TextHighlight>
        </TextTitle>

        <FormContainer>
          <InputsContainer>
            <View>
              <TextLabel>E-mail:</TextLabel>
              <Input
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="seuemail@exemplo.com"
              />
            </View>

            <View>
              <TextLabel>Senha:</TextLabel>
              <Input
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
                placeholder="Mínimo 6 caracteres"
              />
            </View>
          </InputsContainer>

          <CreateAccountButton onPress={handleCadastro}>
            <TextButton>Criar conta</TextButton>
          </CreateAccountButton>
        </FormContainer>

        <TextLogin>
          Já tem conta?{" "}
          <TextNavigation onPress={() => navigation.navigate("Login")}>
            Fazer login
          </TextNavigation>
        </TextLogin>
      </ContentCadastro>
    </Container>
  );
};