import { Link } from "expo-router";
import { View } from "react-native";
import { Button, Div, Image, Text } from "react-native-magnus";
import NavBar from "../../components/header";

function Index() {
    return (
        <View>
            <NavBar />
            <Div>
                <Image
                    h={200}
                    w="100%"
                    mt={10}
                    justifyContent="center"
                    source={{
                        uri:
                            "https://production-prod-trueprofile-blogassets-origin.s3.ap-southeast-1.amazonaws.com/uploads/2022/05/Boost-Your-Healthcare-Career-with-TrueProfile.io-shutterstock_1708515637.jpg",
                    }}
                />
            </Div>
            <Div row mt={10} justifyContent="center">
                <Text style={{
                    fontSize: 36,
                    fontWeight: "bold",
                }}>Tuyển Dụng</Text>
            </Div>
        </View>
    );
}

export default Index;