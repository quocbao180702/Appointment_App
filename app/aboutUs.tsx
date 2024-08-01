import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

function ABout() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }
    })
    return ( 
        <View style={styles.container}>
            <Text>Chơi Tất Tay</Text>
            <Link href="/detail">Qua Detail</Link>
        </View>
     );
}

export default ABout;