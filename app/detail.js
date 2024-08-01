import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

function Detailscreen() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            color: "black",
            fontSize: 36
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Chi Tiết Là Bảo Chớ Đâu hehe</Text>
            <Link href="/aboutUs">Qua Detail</Link>
        </View>
    );
}



export default Detailscreen;