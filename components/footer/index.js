import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button, Div, Icon } from "react-native-magnus";

function Footer() {
    const style = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignContent: "center"
        }
    })
    return (
        <View>
            <Div row justifyContent="center" alignItems="center" mt="xl">
                <Button
                    bg="#677fed"
                    h={50}
                    w={50}
                    mx="xl"
                    rounded="circle"
                    shadow="md"
                    borderless
                >
                    <Link href={"/"}>
                        <Icon name="home" color="white" fontFamily="Feather" />
                    </Link>
                </Button>
            </Div>
        </View>
    );
}

export default Footer;