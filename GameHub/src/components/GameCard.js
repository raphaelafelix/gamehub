// ===============================
// ETAPA 4 - CRIAR COMPONENTE
// ===============================
// Nós vamos reutilizar o componente em 03 telas diferentes (Inicio, Jogos, Favoritos)
import {View, Text, Image, Pressable, StyleSheet} from "react-native";
import { useRouter } from "expo-router";
// navegação programatica.
import { cores } from "../data/tema";

export default function GameCard ({jogo}){
    const router = useRouter();

    return (
        <Pressable
        style={styles.card}
        onPress={() => router.push(`/jogos/${jogo.id}`)} //Navega entre as cotas
        >
            <Image source={jogo.imagem} style={styles.imagem}/>
            <View style={styles.info}>
                <Text style={styles.nome} numberOfLines={1}>
                    {jogo.nome}
                </Text>
                <Text style={styles.genero}>{jogo.genero}</Text>
                <Text style={styles.nota}>⭐{jogo.nota}</Text>
            </View>

        </Pressable>
    )
}

// INICIO AQUI
// ===============================
const styles = StyleSheet.create({
  card: {
    backgroundColor: cores.fundoCard,
    borderRadius: 12,
    overflow: "hidden", 
    width: 158, 
    marginRight: 12, 
    borderWidth: 1,
    borderColor: cores.borda,
  },
  imagem: {
    width: "100%",
    height: 110,
  },
  info: {
    padding: 10,
  },
  nome: {
    color: cores.textoPrincipal,
    fontSize: 14,
    fontWeight: "bold",
  },
  genero: {
    color: cores.textoSecundario,
    fontSize: 12,
    marginTop: 2,
  },
  nota: {
    color: cores.verde,
    fontSize: 12,
    marginTop: 4,
    fontWeight: "600",
  },
});