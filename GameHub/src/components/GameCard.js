//  VAMOS PARA ETAPA 4 - CRIAR O ARQUIVO GameCard.js COM OS DADOS DOS JOGOS
import{view, text, Image, Pressable, StyleSheet} from "react-native";

import { useRouter } from "expo-router";

import { cores } from "../data/tema";

export default function GameCard({ jogo }) {
    const router = useRouter();

    return (
        <Pressable
            style={styles.card}
            onPress={() => router.push(`/jogos/${jogo.id}`)}
            >
                <Image source={jogo.imagem} style={styles.imagem} />
                <View style={styles.info}>
                    <text style={styles.nome} numberOfLines={1}>
                        {jogo.nome}
                    </text>
                    <text style={styles.genero}>{jogo.genero}</text>
                    <text style={styles.genero}> ⭐ {jogo.nota}</text>
                </View>

            </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: cores.fundoCard,
        borderRadius: 12,
        overflow: "hidden",
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
})


